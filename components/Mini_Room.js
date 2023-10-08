"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/loadGLTFModel";
import { MiniRoomContainer, MiniRoomSpinner } from "./Mini_Room_Loader";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Mini_Room = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  // const urlMiniRoomGLB =
  //   (process.env.NODE_ENV === "production"
  //     ? "https://craftzdog.global.ssl.fastly.net/homepage"
  //     : "") + "/mini_room.glb";
  const urlMiniRoomGLB =
    "https://prod.spline.design/rrTKBJoxXsgo3ZC0/scene.splinecode";

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;

      const target = new THREE.Vector3(-0.5, 1.0, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.05 + 960;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        -50000,
        10000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 10) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      try {
        loadGLTFModel(scene, urlMiniRoomGLB, {
          receiveShadow: false,
          castShadow: false,
        }).then(() => {
          animate();
          setLoading(false);
        });
      } catch (error) { 
        throw new Error(error);
      }
      
      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <MiniRoomContainer ref={refContainer}>
      {loading && <MiniRoomSpinner />}
    </MiniRoomContainer>
  );
};

export default Mini_Room;
