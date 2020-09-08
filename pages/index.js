import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>cat vs code</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="mb-8 text-4xl font-bold tracking-tighter leading-tight">
            Latest Entry
          </h2>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
            />
          )}

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome()
  return {
    props: { allPosts },
  }
}