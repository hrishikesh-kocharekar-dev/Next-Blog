import React from "react";
import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold lending-9 tracking-tight text-gray-800 sm:text-4xl dark:text-gray-100  md:lending-14 sm:lending-10 md:text-4xl ">
          All Posts
        </h1>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid-cols-4 xl:grid xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium lending-6 text-emerald-600 ">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="xl:col-span-3 space-y-3 "
              >
                <div>
                  <h3 className="text-2xl leading-8 font-bold text-gray-800 tracking-tight dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>

                <p className="prose text-gray-500 dark:text-gray-40 line-clamp-2 max-w-none 0 ">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
