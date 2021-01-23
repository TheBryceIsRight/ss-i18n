import React from "react";
import * as THREE from "three";
import { TrackballControls } from './jsm/controls/TrackballControls.js';

export default class ThreeDemo2 extends React.Component {
  
  componentDidMount() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth*.65, window.innerHeight*.7);
    renderer.setClearColor("#000000");

    const container = document.getElementById( 'container' );

    container.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 75);

    const controls = new TrackballControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 20);
    controls.update();

    const scene = new THREE.Scene();


    const globalMaterial = new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(generateSprite()),
        blending: THREE.AdditiveBlending
    });


    const particles = [];
    const numOfParticles = 20000;

    const sigma = 10;
    const rho = 22;
    const beta = 8 / 3;


    let dt = 0.0085;

    for (let i = 0; i < numOfParticles; i++) {

        const material = new THREE.Sprite(globalMaterial);

        let x, y, z;
        if (i == 0) {
            x = y = z = 0.1;
        } else {
            x = particles[i - 1].material.position.x;
            y = particles[i - 1].material.position.y;
            z = particles[i - 1].material.position.z;

            const dx = sigma * (y - x)
            const dy = x * (rho - z) - y;
            const dz = x * y - beta * z;

            x += (dx * dt);
            y += (dy * dt);
            z += (dz * dt);
        }
        
        const particle = new Particle(material, x, y, z);
        particle.material.scale.x = .3;
        particle.material.scale.y = .3;
        particle.material.scale.z = .3;

        scene.add(particle.material);
        particles.push(particle);
    }

    dt = .0005;
    function render() {
        renderer.render(scene, camera);

        renderer.autoClearColor = false;
        for (let i = 0; i < numOfParticles; i++) {
            let x = particles[i].material.position.x;
            let y = particles[i].material.position.y;
            let z = particles[i].material.position.z;

            const dx = sigma * (y - x)
            const dy = x * (rho - z) - y;
            const dz = x * y - beta * z;

            x += (dx * dt);
            y += (dy * dt);
            z += (dz * dt);

            particles[i].material.position.x = x;
            particles[i].material.position.y = y;
            particles[i].material.position.z = z;
            
        }
        
        controls.update();
        requestAnimationFrame(render);
    }

    render();


    // Functions to generate particle and particle sprite

    function Particle(material, x, y, z) {
        this.material = material;
        this.material.position.x = x;
        this.material.position.y = y;
        this.material.position.z = z;
    }

    function generateSprite() {
        const canvas = document.createElement('canvas');
        canvas.width = 12;
        canvas.height = 12;

        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,50,50,1)');
        gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }
  }
  render() {
    return (<React.Fragment>
        <div id="container"></div>
    </React.Fragment>)
   
  }
}
