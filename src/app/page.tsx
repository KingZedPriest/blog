import { groq } from "next-sanity";
import Posts from "@/components/Posts";
import { client } from "../../sanity/lib/client";

const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`;


export default async function Home() {
  const data = await client.fetch(postsQuery)
  return (
    <main className='mx-auto max-w-7xl px-4 py-20 text-center text-black sm:px-6 lg:px-8'>
      <div>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>Vbtechgist</p>
        <h1 className='mt-2 lg:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>News That Didn&apos;t Make the Cut.</h1>
        <p className='mt-2 lg:mt-4 text-xs sm:text-sm lg:text-base font-semibold'>Uncovering Overlooked Political, Business, and Trending News.</p>
      </div>
      <Posts posts={data} />
    </main>
  )
}
