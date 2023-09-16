module.exports = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
    transpilePackages: ['@airbnb/ui'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',
            },
        ],
    },
};
