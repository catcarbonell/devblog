import Link from 'next/link'
import DateComponent from '../components/date'
import ThumbnailCoverImg from './th-cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <div className="w-full h-auto md:w-3/4 md:h-xs md:mx-2 mb-20 md:mb-56">
      <div>
        <ThumbnailCoverImg title={title} slug={slug} url={coverImage.url} />
      </div>
      
      <div className="px-6 py-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mt-2">
          <DateComponent dateString={date} />
        </div>
      </div>
     
    </div>
  )
}