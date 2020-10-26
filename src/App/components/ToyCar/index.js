import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { useControl } from "react-three-gui";
import logo from "./ari_lybaert_toy.glb";

export default ({light}) => {
  const [clockwise, setClockwise] = useState(false);
  const { nodes, materials } = useGLTF(logo, true);


  const gltf = useGLTF(logo, true);
  const logoRef = useRef();
  const speed = 0.025;

  // logs
  //console.log("nodes:", nodes);
  console.log("materials:", materials);
  // console.log(gltf.scene);



  useEffect(() => {
    if(light == true) {
      gltf.scene.children[5].children[5].material = materials["taillight"];
      gltf.scene.children[5].children[3].material = materials["headlight"];
      console.log("light on");

    } else {
      gltf.scene.children[5].children[5].material = materials["grey"];
      gltf.scene.children[5].children[3].material = materials["base"];
      console.log("light off");

    }
  }, [light])

  useFrame(() => {
    // logoRef.current.rotation.x += speed * (clockwise ? 1 : -1);
    // logoRef.current.rotation.y += speed * (clockwise ? 1 : -1);
    // logoRef.current.rotation.z += speed * (clockwise ? 1 : -1);
  });

  return (
    <primitive
      object={gltf.scene}
      onClick={() => setClockwise(!clockwise)}
      position={[0, 0, 0]}
      ref={logoRef}
    />
  );
};
