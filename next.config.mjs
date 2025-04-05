// next.config.js (corrected)
const repoName = 'demoProd';

const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: { unoptimized: true },
};

export default nextConfig;
