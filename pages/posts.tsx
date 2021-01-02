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
  const data = await fetch(process.env.SERVER_URI + 'posts');
  const posts = await data.json();
  
  return {
    props: {
      posts
    }
  }
}