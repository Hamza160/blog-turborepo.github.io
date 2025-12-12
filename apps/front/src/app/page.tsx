import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/actions/postActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({
    page: page ? Number(page) : undefined,
  });
  return (
    <>
      <Hero />
      <main className="container m-8 max-w-5xl mx-auto">
        <Posts
          posts={posts}
          currentPage={page ? Number(page) : 1}
          totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
        />
      </main>
    </>
  );
}
