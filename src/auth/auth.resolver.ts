import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthModel } from './auth.model';
import { AuthService } from './auth.service';
import { LogInInput } from './dto/login.input';

@Resolver(() => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => AuthModel)
  logIn(@Args('logInInput') logInInput: LogInInput) {
    return this.authService.logIn(logInInput);
  }
}
