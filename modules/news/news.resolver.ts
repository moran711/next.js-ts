import newsService from './news.service';

const newsQuery = {
  getAllNews: async (_, args) => await newsService.getAllNews(),
  
};
const newsMutation = {
  addNews: async (_, args) => await newsService.addNews(args.image, args.text, args.title),
};

export { newsQuery, newsMutation };