import { MDXRemote } from 'next-mdx-remote'

export default function MDXContent({ mdx }) {
  return (
    <article className="prose prose-slate max-w-none">
      <MDXRemote {...mdx} />
    </article>
  )
}
