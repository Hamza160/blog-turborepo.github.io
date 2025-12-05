import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class CommentEntity {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Post)
  post: Post;

  @Field()
  createdAt: Date;
}
