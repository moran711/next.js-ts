import { NextPageContext } from 'next';
import React from 'react';

export default function Posts({posts}) {
  return (
    <div>
      {posts.name}
    </div>
  )
}

export async function getStaticProps(context: NextPageContext) {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const posts = await res.json()

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      posts
    }
  }
}