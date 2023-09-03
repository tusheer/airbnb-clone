const customConfig: {
    port: number;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
    origin: string;
    dbUri: string;
    accessTokenPrivateKey: string;
    refreshTokenPrivateKey: string;
    accessTokenPublicKey: string;
    refreshTokenPublicKey: string;
    redisCacheExpiresIn: number;
} = {
    port: Number(process.env.PORT) || 8080,
    accessTokenExpiresIn: 1,
    refreshTokenExpiresIn: 60,
    origin: 'http://localhost:3000',
    redisCacheExpiresIn: 60,
    dbUri: process.env.POSTGRESQLURL as string,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
};

export default customConfig;
