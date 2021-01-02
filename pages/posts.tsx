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
  const posts = [{ name: 'John Doe' }]

  return {
    props: {
      posts
    }
  }
}