
import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined' || !window.THREE) return;

    const { THREE } = window;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create sophisticated geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.OctahedronGeometry(0.6, 2),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.5, 1),
      new THREE.ConeGeometry(0.4, 1.2, 8),
      new THREE.CylinderGeometry(0.3, 0.3, 1, 6),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x6366f1, 
        transparent: true, 
        opacity: 0.4,
        wireframe: false,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.35,
        wireframe: true,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.3,
        wireframe: false,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06b6d4, 
        transparent: true, 
        opacity: 0.25,
        wireframe: true,
        shininess: 100
      }),
    ];

    const meshes: any[] = [];

    // Create floating objects with more sophisticated positioning
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      // More sophisticated positioning
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store animation parameters
      (mesh as any).initialPosition = mesh.position.clone();
      (mesh as any).speed = {
        rotation: 0.002 + Math.random() * 0.003,
        float: 0.001 + Math.random() * 0.002,
      };
      (mesh as any).amplitude = {
        x: 2 + Math.random() * 3,
        y: 1 + Math.random() * 2,
        z: 1.5 + Math.random() * 2.5,
      };
      (mesh as any).phase = Math.random() * Math.PI * 2;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0x6366f1, 0.8);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x3b82f6, 0.6);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x8b5cf6, 0.5, 100);
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 15;
    camera.position.y = 2;

    // Animation loop with sophisticated movement
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.005;

      // Animate meshes with more complex patterns
      meshes.forEach((mesh, index) => {
        const phase = (mesh as any).phase;
        const speed = (mesh as any).speed;
        const amplitude = (mesh as any).amplitude;
        const initial = (mesh as any).initialPosition;
        
        // Complex floating motion
        mesh.position.x = initial.x + Math.sin(time * speed.float + phase) * amplitude.x;
        mesh.position.y = initial.y + Math.cos(time * speed.float * 0.7 + phase) * amplitude.y;
        mesh.position.z = initial.z + Math.sin(time * speed.float * 0.5 + phase) * amplitude.z;
        
        // Sophisticated rotation
        mesh.rotation.x += speed.rotation * (1 + Math.sin(time + index) * 0.3);
        mesh.rotation.y += speed.rotation * 0.8 * (1 + Math.cos(time + index) * 0.3);
        mesh.rotation.z += speed.rotation * 0.6 * (1 + Math.sin(time * 1.3 + index) * 0.3);
        
        // Pulse opacity
        if (mesh.material.transparent) {
          const baseOpacity = mesh.material.wireframe ? 0.35 : 0.4;
          mesh.material.opacity = baseOpacity + Math.sin(time * 2 + index) * 0.1;
        }
      });

      // Smooth camera movement with figure-8 pattern
      camera.position.x = Math.sin(time * 0.3) * 3;
      camera.position.y = Math.sin(time * 0.2) * 2 + 2;
      camera.position.z = 15 + Math.cos(time * 0.25) * 2;
      
      // Camera looks at center with slight offset
      const lookAtTarget = new THREE.Vector3(
        Math.sin(time * 0.1) * 2,
        Math.cos(time * 0.15) * 1,
        0
      );
      camera.lookAt(lookAtTarget);

      // Animate lights
      pointLight.position.x = Math.sin(time * 0.7) * 10;
      pointLight.position.y = Math.cos(time * 0.5) * 8;
      pointLight.intensity = 0.5 + Math.sin(time * 2) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default ThreeBackground;
