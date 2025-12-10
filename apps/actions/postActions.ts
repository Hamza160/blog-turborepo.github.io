"use server";

import { fetchGraphQL } from "front/src/lib/fetchGraphQL";
import { GET_POSTS } from "../graphql/quries/posts";
import { print } from "graphql";
import { Post } from "front/src/types/modelTypes";
export const fetchPosts = async () => {
  const data = await fetchGraphQL(print(GET_POSTS));
  return data.posts as Post[];
};
