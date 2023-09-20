import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "posts");

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const frontmatterWithTypes = frontmatter as {
    title: string;
    author: string;
    publishDate: number;
    excerpt: string;
    imgPath: string;
  };

  return { meta: { ...frontmatterWithTypes, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  if (files.length) {
    for (const file of files) {
      const { meta } = await getPostBySlug(file);
      posts.push(meta);
    }

    return posts.sort((a, b) => (a.publishDate > b.publishDate ? -1 : 1));
  }
  return [];
};
