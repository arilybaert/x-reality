import React, {useRef} from 'react';
import { Text } from '@react-three/drei';
import  { useFrame } from 'react-three-fiber';

import { Convert } from 'App/utils';
export default (props) => {

    // const HH = 12;
    const MM = 60;
    // const SS = 60;

    const HAND_SS = useRef();

    useFrame(() => {
        const d = new Date();
        const s = -(d.getSeconds() * 360/MM )
        HAND_SS.current.rotation.z = Convert.toRadians(s);
    })    
    return (<group>
        {false && <axesHelper/>}
        <ambientLight intensity={0.1} color="rgb(115, 221, 132)"/>
        <Text color="black" position={[0, 0, 2]} >DawggyTime</Text>

        <mesh rotation={[Convert.toRadians(-90), 0, 0]}>
            <cylinderBufferGeometry args={[1.2, 1.2, 0.01, 36]}/>
            <meshStandardMaterial 
            opacity={0.5} 
            transparent={true}
            
            />
        </mesh>
        <group rotation={[0, 0,Convert.toRadians(90)]}>
        {Array(60)
            .fill(null)
            .map((value, index) => {
                return (
                    <group rotation={[0, 0, Convert.toRadians((360/ MM) * index)]}>
                        <mesh position={[1,0,0]}>
                            <boxBufferGeometry args={[
                                index%5 ? 0.1 : 0.2, 0.01, 0.015  ]}/>
                            <meshStandardMaterial 
                                color={ index === 0 ? 0x0000ff : 0xffffff
                                
                                }/>
                        </mesh>
                    </group>
                )
            })}

           
        </group>
         {/* wijzers */}
         <group ref={HAND_SS}>
            <mesh position={[0.5, 0, 0]}>
                <boxBufferGeometry args={[1, 0.02, 0.02]}/>
                <meshStandardMaterial color={ 0xffffff}/>
            </mesh>
        </group>

    </group>
    )
}