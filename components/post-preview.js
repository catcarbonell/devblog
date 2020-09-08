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
    <div className="w-3/4 h-xs mx-4 mb-40">
      <div>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      
      <div className="p-4 bg-white rounded-lg shadow-lg">
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