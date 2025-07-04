
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
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.4),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.7,
        wireframe: false
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x7c3aed, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x9333ea, 
        transparent: true, 
        opacity: 0.5,
        wireframe: false
      }),
    ];

    const meshes: any[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store initial position and random movement parameters
      (mesh as any).initialPosition = mesh.position.clone();
      (mesh as any).speed = 0.001 + Math.random() * 0.002;
      (mesh as any).amplitude = 1 + Math.random() * 2;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 10;

    // Animation loop
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate meshes
      meshes.forEach((mesh, index) => {
        // Floating motion
        mesh.position.y = (mesh as any).initialPosition.y + Math.sin(time + index) * (mesh as any).amplitude;
        mesh.position.x = (mesh as any).initialPosition.x + Math.cos(time * 0.7 + index) * 0.5;
        
        // Rotation
        mesh.rotation.x += (mesh as any).speed;
        mesh.rotation.y += (mesh as any).speed * 0.7;
        mesh.rotation.z += (mesh as any).speed * 0.5;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);

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
      style={{ opacity: 0.3 }}
    />
  );
};

export default ThreeBackground;
