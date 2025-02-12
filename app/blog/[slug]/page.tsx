import { fulLBlog } from "@/app/lib/interface";
import { client } from "../../lib/sanity";

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fulLBlog = await getData(params.slug);

  return (
    <div>
      <h1>
        <span className=" block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Daniel - Blog
        </span>
        <span className=" mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
    </div>
  );
}
