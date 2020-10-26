import React from 'react';

export default () => {

    return (
        <mesh receiveShadow rotation={[4.7, 0, 0]} position={[0, -1.20, 0]}>
            <planeBufferGeometry attach="geometry" args={[1500, 1500]}/>
            <meshStandardMaterial attach="material" color="gray" />
        </mesh>
    )
}