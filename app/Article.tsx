import React from "react";
import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article className=" bg-slate-100 dark:bg-slate-900 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:bg-slate-200 transition-all duration-300 ease-out ">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="rounded-t-lg object-cover h-56 w-full shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex-col p-3 ">
          <h2 className="font-bold font-serif text-lg ">{article.title}</h2>

          <section
            className="flex-1 mt-2 text-sm line-clamp-6"
          >
            <p>{article.description}</p>
          </section>

          <footer className="text-xs pt-3 flex space-x-2 justify-end italic ml-auto mt-auto text-gray-600" >
            <p>{article.source} - </p>
            <p><LiveTimeStamp time={article.published_at}/></p>
          </footer>
        </div>
        <ReadMoreButton article = {article} />
      </div>
    </article>
  );
}

export default Article;
