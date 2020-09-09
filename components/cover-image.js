import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className="rounded-lg h-xs w-full object-cover"
    />
  )
  return (
    <div className="shadow-lg">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}                  