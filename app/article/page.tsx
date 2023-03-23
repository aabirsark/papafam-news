import { notFound } from "next/navigation";
import React from "react";
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className=" flex flex-col px-0 lg:flex-row pb-24 pt-10" >
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md lg:ml-3"
          />
        )}

        <div className="py-10 px-10 ">
          {/* title */}
          <h1 className="px-0 no-underline pb-2 font-serif text-2xl font-bold ">
            {article.title}
          </h1>


          {/* info */}
          <div className="flex divide-x-2 divide-dashed text-sm space-x-4 pt-5">
            <h2 >By: {article.author || "Unknown"}</h2>

            <h2 className="pl-4">
              Source: {article.source || "Unknown"}
            </h2>

            <p className="pl-4"><LiveTimeStamp time={article.published_at}/></p>
          </div>


          {/* description */}
          <p className="mt-10 text-lg">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
