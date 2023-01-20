export declare class BCryptUtils {
    private static defaultSaltOrRound;
    static hash(str: string, saltOrRound?: number): Promise<string>;
    static compare(str: string, hash: string): Promise<boolean>;
}
