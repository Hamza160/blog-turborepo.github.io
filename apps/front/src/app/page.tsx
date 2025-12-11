import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/actions/postActions";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const { page, skip } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({
    page: page ? Number(page) : undefined,
  });
  return (
    <main className="container m-8 max-w-5xl mx-auto">
      <Hero />
      <Posts posts={posts} />
    </main>
  );
}
