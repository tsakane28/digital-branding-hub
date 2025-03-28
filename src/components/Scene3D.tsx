
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className }: Scene3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const shapesRef = useRef<THREE.Mesh[]>([]);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Setup renderer with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.outputEncoding = THREE.sRGBEncoding;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add point light for dynamic lighting
    const pointLight = new THREE.PointLight(0xff0055, 1, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Add shapes
    const shapes = [];
    
    // Main shape (TorusKnot)
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    
    // Create gradient material with improved shader
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    
    const fragmentShader = `
      uniform float time;
      uniform vec2 mouse;
      uniform bool hovered;
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      vec3 hsvToRgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }
      
      void main() {
        // Dynamic color based on position, time and mouse
        float r = sin(vUv.x * 3.14159 + time) * 0.5 + 0.5;
        float g = sin(vUv.y * 3.14159 + time * 0.7) * 0.2 + 0.3;
        float b = sin((vUv.x + vUv.y) * 3.14159 + time * 0.9) * 0.5 + 0.5;
        
        // Add mouse influence
        float mouseDistance = length(mouse - vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 1.0));
        float mouseInfluence = 1.0 - smoothstep(0.0, 1.0, mouseDistance);
        
        // Create rim lighting effect
        float rimLight = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
        rimLight = smoothstep(0.5, 1.0, rimLight);
        
        // Enhance colors when hovered
        if (hovered) {
          // HSV color shift for hover state
          vec3 hsvColor = vec3(time * 0.1 + vUv.x * 0.2, 0.8, 0.9);
          vec3 rgbColor = hsvToRgb(hsvColor);
          gl_FragColor = vec4(rgbColor + rimLight * 0.3, 1.0);
        } else {
          // Normal state with subtle mouse influence
          gl_FragColor = vec4(r + mouseInfluence * 0.2, 
                              g + mouseInfluence * 0.1, 
                              b + mouseInfluence * 0.3, 
                              1.0);
        }
        
        // Add iridescence
        gl_FragColor.rgb += sin(vUv.x * 10.0 + time) * 0.05;
      }
    `;
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        hovered: { value: false }
      }
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    shapes.push(torusKnot);
    
    // Add smaller floating particles
    const particleGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const particleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x88ccff,
      emissive: 0x3366ff,
      emissiveIntensity: 0.5,
      shininess: 90
    });
    
    // Create particle system
    for (let i = 0; i < 20; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      // Random positions around the main shape
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 1.5;
      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = Math.sin(angle) * radius;
      particle.position.z = (Math.random() - 0.5) * 2;
      
      // Store original position for animation
      particle.userData.originalPosition = { ...particle.position };
      particle.userData.speed = 0.2 + Math.random() * 0.5;
      particle.userData.amplitude = 0.1 + Math.random() * 0.2;
      
      scene.add(particle);
      shapes.push(particle);
    }
    
    shapesRef.current = shapes;

    // Event listeners for mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Get container bounds
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate normalized mouse position (-1 to 1)
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Event listeners for mouse enter/leave
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    // Add event listeners to container
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation loop
    const animate = (time: number) => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      // Update main shape
      if (shapesRef.current[0] && shapesRef.current[0].material instanceof THREE.ShaderMaterial) {
        // Update shader uniforms
        const shaderMaterial = shapesRef.current[0].material as THREE.ShaderMaterial;
        shaderMaterial.uniforms.time.value = time * 0.001;
        shaderMaterial.uniforms.mouse.value = mouseRef.current;
        shaderMaterial.uniforms.hovered.value = isHovered;
        
        // Rotate the main shape with mouse influence
        shapesRef.current[0].rotation.x = time * 0.0003 + mouseRef.current.y * 0.2;
        shapesRef.current[0].rotation.y = time * 0.0005 + mouseRef.current.x * 0.3;
        
        // Scale effect on hover
        const scale = isHovered ? 1.1 : 1.0;
        shapesRef.current[0].scale.lerp(new THREE.Vector3(scale, scale, scale), 0.05);
      }
      
      // Animate particles
      for (let i = 1; i < shapesRef.current.length; i++) {
        const particle = shapesRef.current[i];
        const userData = particle.userData;
        
        // Oscillate particles around their original positions
        particle.position.x = userData.originalPosition.x + Math.sin(time * 0.001 * userData.speed) * userData.amplitude;
        particle.position.y = userData.originalPosition.y + Math.cos(time * 0.001 * userData.speed) * userData.amplitude;
        particle.position.z = userData.originalPosition.z + Math.sin(time * 0.002 * userData.speed) * userData.amplitude;
        
        // Add mouse interaction
        if (isHovered) {
          // Move particles away from mouse
          const direction = new THREE.Vector3(
            particle.position.x - mouseRef.current.x * 3,
            particle.position.y - mouseRef.current.y * 3,
            particle.position.z
          ).normalize();
          
          particle.position.addScaledVector(direction, 0.01);
        }
        
        // Rotation for sparkle effect
        particle.rotation.x = time * 0.001;
        particle.rotation.y = time * 0.001;
      }
      
      // Camera subtle movement based on mouse
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseRef.current.x * 0.3 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseRef.current.y * 0.3 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(scene.position);
      }
      
      // Render scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      
      // Next frame
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose resources
      shapes.forEach(shape => {
        shape.geometry.dispose();
        if (shape.material instanceof THREE.Material) {
          shape.material.dispose();
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [isHovered]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className} cursor-pointer transition-all duration-300`}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.15)' : 'none'
      }}
    />
  );
};

export default Scene3D;
