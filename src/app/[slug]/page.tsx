import { SanityDocument, groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Post from "@/components/Post";

type Props = {
  params: {
    slug: string;
  };
};
//Makes the page revalidate every 60 seconds, removing any caches and all.
export const revalidate = 60

export default async function Page({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    title,
   mainImage,
   body
  }`;

  const post: SanityDocument = await client.fetch(query, { slug }, { next: { revalidate: 120 } });
  return (
    <div className="py-20">
      <Post post={post} />
    </div>
  );
}
