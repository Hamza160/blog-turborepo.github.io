"use server";

import { fetchGraphQL } from "front/src/lib/fetchGraphQL";
import { print } from "graphql";
import { Post } from "front/src/types/modelTypes";
import { GET_POST_BY_ID, GET_POSTS } from "@/graphql/quries/posts";
import { transformTakeSkip } from "@/lib/helpers";
export const fetchPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { take, skip } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_POSTS), { skip, take });
  return { posts: data.posts as Post[], totalPosts: data.postCount };
};

export const fetchPostsById = async (id: number) => {
  const data = await fetchGraphQL(print(GET_POST_BY_ID), { id });
  return data.getPostById as Post;
};
