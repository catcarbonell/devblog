
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStoriesSlug from '../../components/more-stories-slug'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | cat vs. code
              </title>
              <meta property="og:image" content={post.coverImage.url} />
            </Head>
             
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />

              <PostBody content={post.content} />
            </article>
            
          <div className="mb-10">
            <h3 className="text-2xl font-bold uppercase tracking-hella">More posts</h3>
          </div>
          
          <div className="w-5/6 mb-40 flex flex-col md:flex-row md:flex-wrap justify-items-center">
            {morePosts && morePosts.length > 0 && (
              <MoreStoriesSlug posts={morePosts} />
            )}
          </div>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}