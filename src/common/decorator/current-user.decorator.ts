import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PayloadJwtDto } from '../dto/payload-jwt.dto';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): PayloadJwtDto => {
    const request = ctx.switchToHttp().getRequest();
    return data ? request.user?.payload?.user?.[data] : request.user?.payload?.user;
  },
);