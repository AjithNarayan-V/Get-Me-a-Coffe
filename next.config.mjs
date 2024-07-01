// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['avatars.githubusercontent.com'],
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
};

export default nextConfig;

