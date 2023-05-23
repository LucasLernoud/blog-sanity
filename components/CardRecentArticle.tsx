import React from "react";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
  post: Post;
};

function CardRecentArticle({ post }: Props) {
  return (
    <div
      key={post._id}
      className={`rounded-lg border border-gray-200 bg-black/10 shadow-lg transition duration-300 ease-in hover:bg-black/40 dark:border-gray-700`}
    >
      {/* Bloc entier image */}
      <div className="relative h-80 w-full ">
        <div
          className="h-80 w-full bg-cover bg-center gradient-mask-b-0 "
          style={{
            backgroundImage: `url(${urlFor(post.mainImage).url()})`,
          }}
        ></div>

        {/* Etiquette categories */}
        <div className="absolute top-0 right-0 flex flex-col items-center gap-y-2 gap-x-2 p-4 md:flex-row md:gap-x-2">
          {post.categories.map((category) => (
            <div className="rounded-full bg-[#19111C] bg-opacity-90 px-3 py-1 text-center text-sm font-semibold text-gray-400">
              {category.title}
            </div>
          ))}
        </div>

        {/* Bloc en bas de l'image */}
        <div className="absolute bottom-0 flex w-full justify-between bg-gradient-to-b from-black/20 to-black/40  p-5 text-white  ">
          <div>
            <p className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </p>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-black/40 ">
        <div className="flex-1 p-4">
          {/* <p className="text-lg font-bold underline">{post.title}</p> */}
          <p className=" text-gray-500 line-clamp-2">{post.description}</p>
        </div>

        <p className="group-hover:underlined flex items-center justify-end p-5  font-bold">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </p>
      </div>
    </div>
  );
}

export default CardRecentArticle;
