import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export function contentPaths(type) {
  return path.join(CONTENT_DIR, type)
}

export function getSlugs(type) {
  const dir = contentPaths(type)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''))
}

export function getBySlug(type, slug) {
  const fullPath = path.join(contentPaths(type), `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)
  return { frontmatter: data, content }
}

export async function getSerialized(type, slug) {
  const { frontmatter, content } = getBySlug(type, slug)
  const mdx = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
    parseFrontmatter: false,
  })
  return { frontmatter, mdx }
}

export function getAll(type) {
  const slugs = getSlugs(type)
  return slugs.map(slug => {
    const { frontmatter } = getBySlug(type, slug)
    return { slug, ...frontmatter }
  }).sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}
