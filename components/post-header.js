import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
     
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      
      <div className="w-full md:w-1/2 mx-auto mb-10 bg-gray-900 text-white text-center">
        <DateComponent dateString={date} />
      </div>

    </>
  )
}