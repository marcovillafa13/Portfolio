import { resolve } from 'path';

const nextConfig = {
  // Configura Next.js para que procese los estilos de Tailwind CSS
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@emotion/react'] = resolve('@emotion/react');
      config.resolve.alias['@emotion/styled'] = resolve('@emotion/styled');
    }
    return config;
  },
};

export default nextConfig;
