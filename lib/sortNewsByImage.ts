export default function sortNewsByImage(news: NewsResponse) : NewsResponse {
  const newsWithImage = news.data.filter((e) => e.image !== null);
  const newsWithoutImage = news.data.filter((e) => e.image === null);

  const sortedNewsResponse = {
    pagination : news.pagination,
    data:[...newsWithImage , ...newsWithoutImage ],
  };

  return sortedNewsResponse;
}
