import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Avatar } from "../../Avatar";
import { OrbitControls, Stage, Text } from "@react-three/drei";

export const Experience = () => {
  const { camera, size } = useThree();
  const avatarRef = useRef();

  useFrame(() => {
    camera.position.y = 0.4;
    camera.position.z = 2.3; // Move camera further away from the front
    camera.lookAt(0, 0, 0);
    
  });

  const getTextFontSize = () => {
    if (size.width < 768) {
      return 0.2; // Adjust the font size for smaller screens
    }
    return 0.6; // Default font size for larger screens
  };

  return (
    <>
      
      <Stage intensity={0.6} castShadow={false}>
        <OrbitControls />      
        <Text
            position={[0, 2, -0.5]}
            color="#ffffff"
            fontSize={getTextFontSize()}
            maxWidth={4}
            lineHeight={1}
            textAlign="center"
          >
            hey, there! welcome
          </Text>
        <Avatar  ref={avatarRef} />

      </Stage>
    </>
  );
};
