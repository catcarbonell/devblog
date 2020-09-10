import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      
     
      <div className="w-full lg:w-5/6 mx-auto mb-8 md:mb-16">
        <PostTitle>{title}</PostTitle>
        <CoverImage title={title} url={coverImage.url} />
      </div>
      
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mb-10 bg-gray-900 text-white text-center">
        <DateComponent dateString={date} />
      </div>

    </>
  )
}