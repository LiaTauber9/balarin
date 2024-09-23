/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );
  
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: { and: [/\.(ts|tsx|js|jsx)$/] },
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: false, // Disable SVGO optimization
              },
            },
          ],
        }
      );
  
      fileLoaderRule.exclude = /\.svg$/i;
  
      return config;
    },
  };
  
  export default nextConfig;
  