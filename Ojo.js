// Import Three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 10);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Eye geometry (Pixelated sphere for the eyeball)
const eyeGeometry = new THREE.SphereGeometry(1.5, 8, 8); // Low detail for pixel effect
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
const eyeball = new THREE.Mesh(eyeGeometry, eyeMaterial);
scene.add(eyeball);

// Iris texture
const irisGeometry = new THREE.CircleGeometry(0.7, 8);
const irisMaterial = new THREE.MeshBasicMaterial({ color: 0x3366ff });
const iris = new THREE.Mesh(irisGeometry, irisMaterial);
iris.position.z = 1.51;
eyeball.add(iris);

// Neuronal connections (lines)
const neuronMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
function createNeuronPath(start, end) {
    const neuronGeometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    return new THREE.Line(neuronGeometry, neuronMaterial);
}

for (let i = 0; i < 10; i++) {
    const start = new THREE.Vector3(0, 0, 1.5);
    const end = new THREE.Vector3(
        Math.random() * 6 - 3,
        Math.random() * 6 - 3,
        Math.random() * -3 - 1
    );
    scene.add(createNeuronPath(start, end));
}

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the eye slowly
    eyeball.rotation.y += 0.01;
    iris.rotation.z -= 0.02;

    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
