import { Canvas } from "@react-three/fiber";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="h-screen">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}
