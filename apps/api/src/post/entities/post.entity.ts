import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Tag } from '../../tag/entities/tag.entity';
import { Like } from '../../like/entities/like.entity';
import { CommentEntity } from '../../comment/entities/comment.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  author: User;

  @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Like])
  likes: Like[];

  @Field(() => [CommentEntity])
  comments: CommentEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
