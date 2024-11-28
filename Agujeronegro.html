<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Hole Simulation</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: radial-gradient(circle, #000 50%, #030b1d 100%);
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>
    <script type="module">
        import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';
        import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.154.0/examples/jsm/controls/OrbitControls.js';

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Black Hole
        const blackHoleGeometry = new THREE.SphereGeometry(2, 32, 32);
        const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
        scene.add(blackHole);

        // Accretion Disk
        const diskGeometry = new THREE.RingGeometry(2.1, 5, 64);
        const diskMaterial = new THREE.MeshBasicMaterial({
            color: 0xff4500,
            side: THREE.DoubleSide,
            opacity: 0.8,
            transparent: true,
        });
        const disk = new THREE.Mesh(diskGeometry, diskMaterial);
        disk.rotation.x = Math.PI / 2;
        scene.add(disk);

        // Particles (stars being "sucked in")
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 500;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate accretion disk
            disk.rotation.z += 0.01;

            // Move particles towards the black hole
            const positions = particleGeometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const dx = positions[i * 3];
                const dy = positions[i * 3 + 1];
                const dz = positions[i * 3 + 2];
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (distance > 2.5) {
                    positions[i * 3] -= dx / distance * 0.1;
                    positions[i * 3 + 1] -= dy / distance * 0.1;
                    positions[i * 3 + 2] -= dz / distance * 0.1;
                } else {
                    positions[i * 3] = (Math.random() - 0.5) * 50;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
                }
            }
            particleGeometry.attributes.position.needsUpdate = true;

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
