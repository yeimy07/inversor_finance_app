/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! ADVERTENCIA !!
    // Esto permite que los despliegues se completen exitosamente 
    // incluso si tu proyecto tiene errores de TypeScript.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
