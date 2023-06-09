import { categories } from "@/constants";
import { fetchNews } from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  // fetch data
  const news: NewsResponse =  await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news}  />
    </div>
  );
}
