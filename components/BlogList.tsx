import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import CardRecentArticle from "./CardRecentArticle";
import CarouselFeaturedArticle from "./CarouselFeaturedArticle";
import MainFeaturedArticle from "./MainFeaturedArticle";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="mb-10 border-[#b394a0]" />

      <h2>Featured articles</h2>

      <div className="grid h-[600px] grid-cols-2 ">
        <div>
          <MainFeaturedArticle post={posts[0]} />
        </div>
        {/* <div className="overflow-y-auto pr-6 pl-6 scrollbar-hide">
          {posts.map((post, index) => (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <CarouselFeaturedArticle post={post} />
            </ClientSideRoute>
          ))}
        </div> */}
      </div>

      <hr className="mb-10 border-[#b394a0]" />

      <h2>Recent articles</h2>

      <div className="grid grid-cols-1 gap-10 p-10 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <CardRecentArticle post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
