import { getPostBySlug } from "@/utils/mdx";
import Link from "next/link";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { meta } = await getPostBySlug(params.slug);

  return {
    title: meta.title
      ? meta.title
      : "Photo Convert Into 20Kb - Compress Into 20Kb Online",
    description: meta.excerpt
      ? meta.excerpt
      : "Here convert your photo like jpg, png, jpeg or any image file into 20kb online. Upload your photo and it will convert/compress photo into 20kb",
    openGraph: {
      images: [meta.imgPath],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content } = await getPostBySlug(params.slug);

  return (
    <div>
      {content}
      <Link href="/">Photo Convert Into 20KB</Link>
    </div>
  );
}



