"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import ExplodingObject from "./ui/ExplodingObject/Explodingobject"; // Import the ExplodingObject component

const HomePage = () => {
  const [explode, setExplode] = useState(false);
  // const [isMounted, setIsMounted] = useState(false); // Ensure the component is mounted
  const router = useRouter(); // Ensure useRouter is client-side

  const handleClick = () => {
    // Trigger the explosion
    // setExplode(true);  

    // Redirect after a delay to allow the explosion to play
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <ExplodingObject explode={explode} />
      </Canvas>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1em 2em",
          fontSize: "1.5em",
        }}
        onClick={handleClick}
      >
        Explode
      </button>
    </div>
  );
};

export default HomePage;
