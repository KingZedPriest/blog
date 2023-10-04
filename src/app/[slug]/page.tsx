import { SanityDocument, groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Post from "@/components/Post";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    title,
   mainImage,
   body
  }`;

  const post: SanityDocument = await client.fetch(query, { slug });
//   console.log(`This is the post: \n${JSON.stringify(post, null, 2)}`)
  return (
    <div className="py-20">
      <Post post={post} />
    </div>
  );
}
