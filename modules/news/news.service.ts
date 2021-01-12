import News from './news.model';

class NewsServices {
  async getAllNews() {
    const comments = await News.find().sort({"date": -1});
    return comments;
  }
  async addNews(image, text, title) {
    const createdNews = await new News({image, text, title});
    return await createdNews.save(); 
  }
}

export default new NewsServices();