import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function ConnectionLines() {
  const groupRef = useRef<THREE.Group>(null);
  const locations = [
    { name: 'US', lat: 37.77, lng: -122.41 },
    { name: 'Japan', lat: 35.67, lng: 139.65 },
    { name: 'UK', lat: 51.5, lng: -0.12 },
    { name: 'Brazil', lat: -23.55, lng: -46.63 },
    { name: 'Singapore', lat: 1.35, lng: 103.81 },
  ];

  const arcs = useMemo(() => {
    const list: { curve: THREE.QuadraticBezierCurve3; delay: number; speed: number }[] = [];
    const routes = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ];

    routes.forEach(([srcIdx, destIdx], i) => {
      const src = locations[srcIdx];
      const dest = locations[destIdx];
      const start = latLngToVector3(src.lat, src.lng, 2);
      const end = latLngToVector3(dest.lat, dest.lng, 2);

      const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(2.7 + Math.random() * 0.3);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

      list.push({
        curve,
        delay: i * 0.8,
        speed: 0.4 + Math.random() * 0.4,
      });
    });
    return list;
  }, []);

  return (
    <group ref={groupRef}>
      {arcs.map((arc, i) => (
        <FlowingBeam key={i} curve={arc.curve} delay={arc.delay} speed={arc.speed} />
      ))}
    </group>
  );
}

function FlowingBeam({
  curve,
  delay,
  speed,
}: {
  curve: THREE.QuadraticBezierCurve3;
  delay: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !pulseRef.current) return;
    const time = (state.clock.getElapsedTime() + delay) * speed;
    const t = time % 2.0;

    const pathOpacity = Math.max(0, Math.sin(t * (Math.PI / 1.2)) * 0.2);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = pathOpacity;

    const progress = Math.min(1, t / 1.2);
    const pos = curve.getPoint(progress);
    pulseRef.current.position.copy(pos);

    const pulseOpacity = t < 1.2 ? Math.sin(progress * Math.PI) : 0;
    (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = pulseOpacity;
    pulseRef.current.scale.setScalar(0.6 + pulseOpacity * 1.8);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <tubeGeometry args={[curve, 64, 0.015, 8, false]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0} />
      </mesh>

      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color="#ff0000" transparent opacity={0} />
      </mesh>
    </group>
  );
}

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function GlobeModel() {
  const globeRef = useRef<THREE.Group>(null);

  const mapTexture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
      ),
    []
  );
  const specularTexture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
      ),
    []
  );

  useFrame((state) => {
    if (!globeRef.current) return;
    const time = state.clock.getElapsedTime();

    globeRef.current.rotation.y = time * 0.1;

    const breath = Math.sin(time * 0.5);
    globeRef.current.rotation.x = 0.4 + breath * 0.05;
    globeRef.current.rotation.z = breath * 0.03;

    const scale = 1 + breath * 0.01;
    globeRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 64, 64]}>
        <meshPhongMaterial
          map={mapTexture}
          specularMap={specularTexture}
          specular={new THREE.Color('#444')}
          shininess={5}
        />
      </Sphere>

      <Sphere args={[2.05, 32, 32]}>
        <meshStandardMaterial color="#93c5fd" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>

      <group>
        {[
          { lat: 35.67, lng: 139.65 },
          { lat: 51.5, lng: -0.12 },
          { lat: 37.77, lng: -122.41 },
          { lat: -23.55, lng: -46.63 },
          { lat: 1.35, lng: 103.81 },
        ].map((pos, i) => (
          <mesh key={i} position={latLngToVector3(pos.lat, pos.lng, 2.01)}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshBasicMaterial color="#ff0000" />
            <Html distanceFactor={8}>
              <div className="h-1 w-1 rounded-full bg-red-600 shadow-[0_0_10px_red]" />
            </Html>
          </mesh>
        ))}
      </group>

      <ConnectionLines />
    </group>
  );
}

/**
 * Globe + connection arcs from {@link https://github.com/mepmbusiness/Global-Portfolio Global-Portfolio}.
 * Sized to fill a parent with aspect ratio (e.g. case study media frame).
 */
export default function GlobalExpansionGlobe() {
  return (
    <div className="absolute inset-0 bg-[#f8fafc]">
      <Canvas
        className="h-full w-full touch-none"
        camera={{ position: [0, 0, 7], fov: 40 }}
        gl={{ alpha: false, antialias: true }}
      >
        <color attach="background" args={['#f8fafc']} />
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
            <GlobeModel />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
