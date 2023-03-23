import { fetchNews } from "@/lib/fetchNews";
import React from "react";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="pt-8 mx-auto pl-10 text-3xl font-serif font-bold underline underline-offset-2 decoration-orange-500 ">
        Search Results for: {searchParams?.term}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
