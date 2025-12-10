import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "../../../actions/postActions";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="container m-8 max-w-5xl mx-auto">
      <Hero />
      <Posts posts={posts} />
    </main>
  );
}
