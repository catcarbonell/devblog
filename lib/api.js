import { createClient } from 'contentful'
// import { useStickyState } from '../utils/useStickyState';


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
})

// const previewClient = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW,
//   host: 'preview.contentful.com',
// })

const getClient = (preview) => (preview ? previewClient : client)

client.sync({
  initial: true,
  sync: 'all',
})
.then((response) => {
  // console.log(response.entries)
  // console.log(response.assets)
  // console.log(response.deletedEntries)
  // console.log(response.deletedAssets)
  console.log(response.nextSyncToken)
  // store the new token
  // setItem('contentfulSyncToken', response.nextSyncToken)
})
.catch(console.error)

function parsePost({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    coverImage: fields.coverImage.fields.file,

  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getPreviewPostBySlug(slug) {
  const entries = await getClient(true).getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': slug,
  })
  return parsePostEntries(entries)[0]
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })
  return parsePostEntries(entries, (post) => post.fields)
}

export async function getAllPostsForHome() {
  const entries = await getClient().getEntries({
    content_type: 'post',
    order: '-fields.date',
  })
  return parsePostEntries(entries)
}

export async function getPostAndMorePosts(slug) {
  const entry = await getClient().getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': slug,
  })
  const entries = await getClient().getEntries({
    content_type: 'post',
    limit: 3,
    order: '-fields.date',
    'fields.slug[ni]': slug,
  })

  return {
    post: parsePostEntries(entry)[0],
    morePosts: parsePostEntries(entries),
  }
}