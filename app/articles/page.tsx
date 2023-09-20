import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getAllPostsMeta } from "@/utils/mdx";

export const metadata = {
  title: "Photo Convert Into 20kB - ARTICLES ",
  description:
    "Browse through our articles on image conversion and compression. Feel free to leave us feedback if you need more details on any topic we cover or have content suggestions",
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();
  if (!posts.length) return <h1>Sorry, NO POSTS TO DISPLAY</h1>;

  return (
    <div className="flex w-full gap-5 flex-wrap justify-center p-5">
      <h1 className="text-2xl text-left m-0 pl-0 w-full ">
        ARTICLES ON PHOTO CONVERSION
      </h1>
      <p className="text-left">
        Browse through our articles on image conversion and compression. Feel
        free to leave us feedback if you need more details on any topic we cover
        or have content suggestions.
      </p>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={post.slug}
          className="rounded shadow hover:shadow-lg   w-full flex justify-center items-center px-5 "
        >
          <Image
            src={post.imgPath}
            width={150}
            height={150}
            alt={post.title}
            className="  object-cover "
          />
          <div className="  w-full text-left flex flex-col justify-between items-start pl-5 gap-1 ">
            <h2 className="text-left m-0  text-xl">{post.title}</h2>
            <p className="postExcerpt text-sm m-0 no-underline">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
