import commentService from './comments.service';

const commentQuery = {
  getAllComments: async (_, args) => await commentService.getAllComments(),
  
};
const commentMutation = {
  addComment: async (_, args) => await commentService.addComment(args.comment),
};

export { commentQuery, commentMutation };