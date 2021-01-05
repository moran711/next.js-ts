import React from 'react';
import Fans from '../components/fans';
import { Comment } from '../components/fans/fans';
import { getAllComments } from '../operations/comments.operations';

const FansPage:React.FC<{comments: Comment[]}> = ({comments}) => {
  return (
    <main className="main">
      <Fans comments={comments} />
    </main> 
  )
}

export async function  getServerSideProps() {
  const comments = await getAllComments();
  
  return { props: {comments} };
}

export default FansPage;