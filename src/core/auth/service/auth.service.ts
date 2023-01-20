import { BadRequestException, HttpService, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map } from 'rxjs/operators';
import { UserService } from 'src/core/user/service/user.service';
import { User } from 'src/entity/user.entity';
import { ResponseTokenDto } from '../dto/ResponseToken.dto';
import { v4 as uuidv4 } from 'uuid';
import { BCryptUtils } from 'src/common/util/bcrypt.util';
interface ReponseGraphApi {
    id: string;
    name: string;
    email: string;
    first_name: string;
    last_name: string;
}

@Injectable()
export class AuthService {

    private readonly logger:Logger = new Logger(AuthService.name);

    constructor(private readonly httpService: HttpService,
                private readonly userSerivce: UserService,
                private readonly jwtService: JwtService) {}

    
    public async loginByAccessTokenFb
            (accessToken: string, userID: string): Promise<ResponseTokenDto> {

        try {
            const urlGraphApi: string = `https://graph.facebook.com/v9.0/${userID}?fields=id,name,email,first_name,last_name&access_token=${accessToken}`;

            const response: ReponseGraphApi = await this.httpService
                            .get(urlGraphApi)
                            .pipe(map(response => response.data))
                            .toPromise();
            this.logger.log(response);

            const {id, name, email} = response;

            if (!email) {
                throw new BadRequestException("Access token's permissions haven't email permission");
            }

            const user: User = await this.userSerivce.findByEmail(email);

            let token: string = '';

            if (user != null) {
                // signed token
                const {password, ...data} = user;
                token = this.jwtService.sign({payload: {user: data}});
            } else {
                const newUser: User = new User();
                newUser.email = email;
                newUser.name = name;
                newUser.password = uuidv4();
                newUser.createdAt = new Date();

                const insertedUser: User = await this.userSerivce.createNewUser(newUser);
                // signed token
                const {password, ...data} = insertedUser;
                token = this.jwtService.sign({payload: {user: data}});
            }

            const responseTokenDto = new ResponseTokenDto();
            responseTokenDto.data = {token};
            return responseTokenDto;
            
        } catch (e) {
            console.log(e);
            this.logger.error(e);
            if (e.response.status == 400) {
                throw new BadRequestException(e.message);
            }
            throw new InternalServerErrorException(e.message);
        }
        
    }

    public async loginByEmailPassword(email: string, pwd: string): Promise<ResponseTokenDto> {
        const user: User = await this.userSerivce.findByEmail(email);

        if (user == null) {
            throw new NotFoundException("Email hasn't been found");
        }

        const isEqual: boolean = await BCryptUtils.compare(pwd, user.password);

        if (!isEqual) {
            throw new NotFoundException("Email/Password wrong");
        }

        // sign token
        const {password, ...data} = user;
        const token: string = this.jwtService.sign({payload: {user: data}});
        const responseTokenDto = new ResponseTokenDto();
        responseTokenDto.data = {token};
        return responseTokenDto;
    }

}
