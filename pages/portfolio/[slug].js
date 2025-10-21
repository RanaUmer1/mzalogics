import MDXContent from '../../components/MDXContent'
import { getSlugs, getSerialized } from '../../lib/mdx'

export async function getStaticPaths(){
  const slugs = getSlugs('cases')
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false }
}

export async function getStaticProps({ params }){
  const { mdx, frontmatter } = await getSerialized('cases', params.slug)
  return { props: { mdx, frontmatter } }
}

export default function CaseStudy({ mdx, frontmatter }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      {frontmatter.summary && (<p className="mt-2 text-slate-600">{frontmatter.summary}</p>)}
      <div className="mt-8">
        <MDXContent mdx={mdx} />
      </div>
    </div>
  )
}
