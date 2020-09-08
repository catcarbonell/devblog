import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    
    <>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
          />
        ))}
    </>
  
  )
}