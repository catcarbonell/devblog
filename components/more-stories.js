import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold tracking-tighter leading-tight">
        Past Entries
      </h2>
      
      <div className="w-full flex flex-col md:flex-row content-evenly">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  )
}