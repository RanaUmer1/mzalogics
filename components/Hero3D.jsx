import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function SpinningTorus() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color={"#2563eb"} metalness={0.4} roughness={0.2} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Build, launch, and scale modern apps</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Android, iOS, Web, Desktop, QA, and Growth Marketing — delivered by a single expert team.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-5 py-2 rounded bg-blue-600 text-white">Start a project</a>
            <a href="/portfolio" className="px-5 py-2 rounded border">See case studies</a>
          </div>
        </div>
        <div className="h-72 md:h-96 rounded-lg overflow-hidden border">
          <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <SpinningTorus />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}
