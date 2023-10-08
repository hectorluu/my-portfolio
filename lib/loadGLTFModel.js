import SplineLoader from "@splinetool/loader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    // const loader = new GLTFLoader();
    const loader = new SplineLoader();

    loader.load(
      glbPath,
      (splineScene) => {
        splineScene.name = "mini_room";
        splineScene.position.y = 0;
        splineScene.position.x = 0;
        splineScene.receiveShadow = receiveShadow;
        splineScene.castShadow = castShadow;
        scene.add(splineScene);

        splineScene.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(splineScene);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
