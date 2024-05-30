/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/HelpEase",
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/Login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
