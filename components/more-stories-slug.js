import PostPreviewSlug from './post-preview-slug'

export default function MoreStoriesSlug({ posts }) {
  return (
    
    <>
        {posts.map((post) => (
          <PostPreviewSlug
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