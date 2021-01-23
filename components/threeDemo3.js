import React from "react";
import * as THREE from "three";
import { TrackballControls } from './jsm/controls/TrackballControls.js';
import {GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader";

export default class ThreeDemo2 extends React.Component {
  
  componentDidMount() {
    
// const backgroundColor = 0x000000;

	/*////////////////////////////////////////*/

	const renderCalls = [];
	function render () {
	requestAnimationFrame( render );
	renderCalls.forEach((callback)=>{ callback(); });
	}
	render();

	/*////////////////////////////////////////*/

	const scene = new THREE.Scene();
	const container = document.getElementById( 'container' );


	const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 800 );
	camera.position.set(5,5,5);

	const renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth*.63, window.innerHeight*.7 );
	// renderer.setClearColor( backgroundColor );//0x );

	renderer.toneMapping = THREE.LinearToneMapping;
	renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap;

	window.addEventListener( 'resize', function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth*.63, window.innerHeight*.7 );
	}, false );

	container.appendChild( renderer.domElement);

	function renderScene(){ renderer.render( scene, camera ); }
	renderCalls.push(renderScene);

	/* ////////////////////////////////////////////////////////////////////////// */

	const controls = new TrackballControls( camera, renderer.domElement );

	controls.zoomSpeed = 0.9;

	controls.enableDamping = true;
	controls.dampingFactor = 0.05;

	renderCalls.push(function(){
	controls.update()
	});


	/* ////////////////////////////////////////////////////////////////////////// */


	const light = new THREE.PointLight( 0xffffcc, 20, 200 );
	light.position.set( 4, 30, -20 );
	scene.add( light );

	const light2 = new THREE.AmbientLight( 0x20202A, 20, 100 );
	light2.position.set( 30, -10, 30 );
	scene.add( light2 );

	/* ////////////////////////////////////////////////////////////////////////// */



	const loader = new GLTFLoader();
	loader.crossOrigin = true;
	loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf', function ( data ) {

	
		const object = data.scene;
		object.position.set(0, -10, -0.75);
	//     object.rotation.set(Math.PI / -2, 0, 0);

	//     TweenLite.from( object.rotation, 1.3, {
	//       y: Math.PI * 2,
	//       ease: 'Power3.easeOut'
	//     });

		// TweenMax.from( object.position, 3, {
		// y: -8,
		// yoyo: true,
		// repeat: -1,
		// ease: 'Power2.easeInOut'
		// });
		//object.position.y = - 95;
		scene.add( object );
	//, onProgress, onError );
	});

  }
  render() {
    return <React.Fragment>
		<div id="container"></div>
    </React.Fragment>
   
  }
}
