import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { AuthPayload } from './entities/auth-payload.entity';
import { User } from '../user/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    const user = await this.authService.validateLocalUser(signInInput);

    const transformedUser = {
      ...user,
      bio: user.bio ?? undefined,
      avatar: user.avatar ?? undefined,
    } as User;

    return await this.authService.login(transformedUser);
  }
}
