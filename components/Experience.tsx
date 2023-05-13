import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface ExperienceProps {}

const Experience = ({}: ExperienceProps) => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.05;
  });

  return (
    <>
      <group ref={ref}>
        <mesh>
          <sphereGeometry />
          <meshBasicMaterial wireframe />
        </mesh>

        <mesh position-x={2} position-z={2}>
          <boxGeometry />
          <meshBasicMaterial wireframe />
        </mesh>
      </group>

      <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshBasicMaterial wireframe />
      </mesh>
    </>
  );
};

export default Experience;
