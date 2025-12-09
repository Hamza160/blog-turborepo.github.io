export type Post = {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  thumbnail: string | null;
  published: boolean;
  authorId: number;
  tags?: Tag[];
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CommentModel = {
  id: number;
  content: string;
  post: Post;
  author: User;
  createdAt: Date;
  updatedAt: Date;
};
