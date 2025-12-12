import React from 'react';
import { fetchPostsById } from "@/actions/postActions";

type Props = {
  params:Promise<{
    id: string;
  }>
}
export default async function BlogPage({params}:Props) {
  const postId = (await params).id
  const post = await fetchPostsById(+postId)
  return (
    <main className="container mx-auto px-4 py-8 pt-16">
      <h1 className="text-4xl font-bold mb-4 text-slate-700">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-4">By {post.author.name} | {new Date(post.createdAt).toLocaleDateString()}</p>
    </main>
  );
}

