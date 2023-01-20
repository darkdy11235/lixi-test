import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RoleEnum } from '../enum/role.enum';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles, ROLES_KEY } from './role.decorator';

// decorator composition
export function Auth(...roles: RoleEnum[]) {
  return applyDecorators(

    // ! FIX: alternative line 13 to 12
    // Roles(roles),
    SetMetadata(ROLES_KEY, roles),

    UseGuards(JwtAuthGuard, RolesGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}