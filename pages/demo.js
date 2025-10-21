import dynamic from 'next/dynamic'

const TechForgeDemo = dynamic(() => import('../components/TechForgeDemo'), { ssr: false })

export default function DemoPage(){
  return <TechForgeDemo />
}
