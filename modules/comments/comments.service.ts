import Comment from './comments.model';

class CommentServices {
  async getAllComments() {
    const comments = await Comment.find().sort({"date": -1});
    return comments;
  }
  async addComment(comment) {
    const createdComment = await new Comment({text: comment});
    return await createdComment.save(); 
  }
}

export default new CommentServices();