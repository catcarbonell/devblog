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
            <div className="p-6">
                <h3 className="text-2xl font-bold lg:text-4xl leading-tight">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="text-md mt-2">
                <DateComponent dateString={date} />
            </div>
        </div>
    </div>

  )
}