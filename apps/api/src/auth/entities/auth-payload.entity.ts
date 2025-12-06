import { Field, Int } from '@nestjs/graphql';

export class AuthPayload {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  accessToken: string;
}
