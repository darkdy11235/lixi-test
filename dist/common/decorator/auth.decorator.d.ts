import { RoleEnum } from '../enum/role.enum';
export declare function Auth(...roles: RoleEnum[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
