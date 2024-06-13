"use client";

import React, { useContext } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { LoadingContext } from "@/context/overlay-context";

const OverlayComponent = () => {
  const { isLoading } = useContext(LoadingContext);

  return <>{isLoading && <LoadingOverlay />} </>;
};

export default OverlayComponent;
