import Link from 'next/link'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <div className="h-xxs w-xxs min-w-0 mx-4 rounded-lg shadow-lg mb-20">
      <div>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      
      <div className="p-4">
        <h3 className="text-3xl font-bold leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div>
          <DateComponent dateString={date} />
        </div>
      </div>
     
    </div>
  )
}