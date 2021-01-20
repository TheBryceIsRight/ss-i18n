// components/Scroll.js

import { useEffect } from "react";
import * as THREE from "three";
import { CSS3DRenderer } from 'three-css3drenderer';


export default function Scroll() {
  useEffect(function mount() {
    function onWindowResize() {
        const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.set( 500, 350, 750 );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        const renderer = new CSS3DRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }

      window.addEventListener( 'resize', onWindowResize, false );

    return function unMount() {
        window.addEventListener( 'resize', onWindowResize, false );
    };
  });

  return null;
}