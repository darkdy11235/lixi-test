import * as bcrypt from 'bcrypt';

export class BCryptUtils {

    private static defaultSaltOrRound: number = 10;

    public static async hash(str: string, saltOrRound ?: number): Promise<string> {
        let round = this.defaultSaltOrRound;
        if (saltOrRound) {
            round = saltOrRound;
        }

        return bcrypt.hash(str, round);
    }

    public static async compare(str: string, hash: string): Promise<boolean> {
        return bcrypt.compare(str, hash);
    }

}