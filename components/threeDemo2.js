import React from "react";
import * as THREE from "three";
import { TrackballControls } from './jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from './jsm/renderers/CSS3DRenderer.js';

export default class ThreeDemo2 extends React.Component {
  
  componentDidMount() {
    let camera, scene, renderer;
			let controls;

			function Element( x, y, z, ry ) {

				const div = document.createElement( 'div' );
				div.style.width = '411px';
				div.style.height = '731px';
				div.style.backgroundColor = '#000';

				const iframe = document.createElement( 'iframe' );
				iframe.style.width = '411px';
				iframe.style.height = '731px';
				iframe.style.border = '0px';
				iframe.src = [ "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj5FLmnW2L5KyxVS5kt3r7t%2F3D-Secure-Sales-Tool-Copy%3Fnode-id%3D124%253A23041%26viewport%3D706%252C99%252C0.09623917192220688%26scaling%3Dscale-down" ];
				div.appendChild( iframe );

				const object = new CSS3DObject( div );
				object.position.set( x, y, z );
				object.rotation.y = ry;

				return object;

			}

			init();
			animate();

			function init() {

				const container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.set( 200, 200, 900 );

				scene = new THREE.Scene();

        renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

        const group = new THREE.Group();
        
        group.add( new Element( -350, 120, -200, 0 ) );
       
				scene.add( group );

				controls = new TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 4;

				window.addEventListener( 'resize', onWindowResize, false );

				// Block iframe events when dragging camera

				const blocker = document.getElementById( 'blocker' );
				blocker.style.display = 'none';

				controls.addEventListener( 'start', function () {

					blocker.style.display = '';

				} );
				controls.addEventListener( 'end', function () {

					blocker.style.display = 'none';

				} );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );

			}
  }
  render() {
    return <React.Fragment>
       <div ref={ref => (this.mount = ref)} />
      <div id="container"></div>
      <div id="blocker"></div>
    </React.Fragment>
   
  }
}
