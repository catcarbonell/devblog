import Link from 'next/link'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <div>
     
        <CoverImage title={title} slug={slug} url={coverImage.url} />
     
        <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
            <div>
                <h3 className="mb-2 text-4xl font-bold lg:text-6xl leading-tight">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline">{title}</a>
                    </Link>
                </h3>
                <div className="mb-4 md:mb-0 text-lg">
                    <DateComponent dateString={date} />
                </div>
            </div>
        </div>
    </div>
  )
}