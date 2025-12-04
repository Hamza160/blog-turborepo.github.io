import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { LikeModule } from './like/like.module';
import path from 'node:path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/graphql/schema.graphql'),
    }),
    PrismaModule,
    PostModule,
    UserModule,
    CommentModule,
    TagModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
