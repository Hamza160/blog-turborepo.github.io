import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class Like {
  @Field(() => Int)
  id: number;

  @Field(() => Post)
  post: Post;

  @Field()
  createdAt: Date;
}
