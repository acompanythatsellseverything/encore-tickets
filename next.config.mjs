/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: [process.env.API_DOMAIN],
  },
};

export default nextConfig;
