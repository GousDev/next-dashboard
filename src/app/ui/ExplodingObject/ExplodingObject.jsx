import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const ExplodingObject = ({ explode }) => {
  const meshRef = useRef();
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(true);
  const { camera, size } = useThree();
  useEffect(() => {
    // Calculate scale based on viewport dimensions
    const { width, height } = size;
    const aspectRatio = width / height;

    // Estimate the required scale to cover the viewport
    const fieldOfView = camera.fov * (Math.PI / 180); // Convert to radians
    const cameraDistance = camera.position.z; // Assuming camera is positioned at z = 0

    // Calculate the required scale factor
    const scaleFactor = 2 * Math.tan(fieldOfView / 2) * cameraDistance;

    // Adjust the scale factor for aspect ratio
    const adjustedScaleFactor =
      scaleFactor * Math.max(aspectRatio, 1 / aspectRatio);

    // Set initial scale
    setScale(adjustedScaleFactor);
  }, [camera, size]);

  useFrame(() => {
    if (explode && visible) {
      // Increase the scale to simulate explosion
      setScale((prev) => prev + 0.2);

      // Once the object is scaled beyond a certain point, make it disappear
      if (scale > 100) {
        setVisible(false);
      }
    }
  });

  return (
    visible && (
      <Sphere ref={meshRef} scale={scale} position={[0, 0, 0]}>
        <meshBasicMaterial color="black" />
      </Sphere>
    )
  );
};

export default ExplodingObject;
