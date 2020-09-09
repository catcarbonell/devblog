import Link from 'next/link'
import DateComponent from '../components/date'
import ThumbnailCoverImg from '../components/th-cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <div className="w-full md:w-3/4 mt-10 mb-20 rounded-lg shadow-lg">
        <ThumbnailCoverImg title={title} slug={slug} url={coverImage.url} />
            <div className="px-10 pt-6 pb-8">
                <h3 className="text-3xl font-bold lg:text-6xl leading-tight">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="text-lg">
                <DateComponent dateString={date} />
            </div>
        </div>
    </div>

  )
}