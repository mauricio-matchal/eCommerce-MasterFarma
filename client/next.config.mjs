/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    images: {
        domains: ['masterfarma.cdn.prismic.io'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
};
