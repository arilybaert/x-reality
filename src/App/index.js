import React from "react";
import  { Canvas } from 'react-three-fiber';
import {OrbitControls} from "@react-three/drei";

import { Convert } from "App/utils";
import { Clock } from "App/components";
import "./styles.css";
export default () => {

    return (
        <Canvas>
            {true && < OrbitControls/>}
            {/* {true && <axesHelper/>} */}
            <Clock/>
            {/* <mesh rotation={[0, 0, Convert.toRadians(45)]}>
                <boxBufferGeometry args={[1, 2, 1]}/>
                <meshMatcapMaterial color="#ddd"/>

            </mesh> */}
        </Canvas>
    )
}