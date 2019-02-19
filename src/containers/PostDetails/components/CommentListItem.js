import React from 'react';

function CommentListItem({ comment: { body, author, voteScore } }) {
  return (
    <div>
      <p>Comentário: {body}</p>
      <p>Author: {author}</p>
      <p>Vote score: {voteScore}</p>
    </div>
  );
}

export default CommentListItem;
