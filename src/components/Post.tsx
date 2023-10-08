import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <article className="prose prose-lg container mx-auto p-4">
      <h1>{post.title}</h1>
      {post?.mainImage ? (
        <Image
          className="float-left m-0 mr-4 w-1/3 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt ?? "VBTechGist Image"}
        />
      ) : "No Image"}
      {post?.body ? <PortableText value={post.body} /> : "The body of the blog Post."}
    </article>
  );
}
