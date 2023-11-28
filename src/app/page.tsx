import { groq } from "next-sanity";
import Posts from "@/components/Posts";
import { client } from "../../sanity/lib/client";

//Import Icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

//Import Needed Components
import HotPost from "@/components/HotPost";

//Queries
const postsQuery = groq`*[_type == "post" && defined(slug.current)]
{
 ..., 
 _id, 
 author->, 
 categories[]->, 
 title, 
 slug
} | order(_createdAt desc)`;

const hotPostsQuery = groq`
  *[_type == "post" && "Hot" in categories[]->title]{
    ..., 
    _id, 
    author->, 
    categories[]->, 
    title, 
    slug
} | order(_createdAt desc)`;

export default async function Home() {
  const data = await client.fetch(postsQuery, { next: { revalidate: 120 } });
  const hotPosts = await client.fetch(hotPostsQuery, { next: { revalidate: 120 } });
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 text-center text-black sm:px-6 lg:px-8">
      <div>
        <p className="text-xs font-semibold sm:text-sm md:text-base lg:text-lg">
          Vbtechgist
        </p>
        <h1 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl lg:mt-4 lg:text-4xl">
          News That Didn&apos;t Make the Cut.
        </h1>
        <p className="mt-2 text-xs font-semibold sm:text-sm lg:mt-4 lg:text-base">
          Uncovering Overlooked Political, Business, and Trending News.
        </p>
      </div>
      <article>
        <HotPost hotPosts={hotPosts}/>
        <Posts posts={data} />
      </article>
      <section className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-1 duration-500 hover:-translate-x-1">
          <BsArrowLeftShort size={20} /> <button>Prev</button>
        </div>
        <div className="flex items-center gap-1 duration-500 hover:translate-x-1">
          <button>Next</button> <BsArrowRightShort size={20} />
        </div>
      </section>
    </main>
  );
}
