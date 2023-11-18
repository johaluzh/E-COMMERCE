import react from '@vitejs/plugin-react-swc';

export default {
  plugins: [react()],

  resolve: {
    alias: {
      '/src': '/src', // Puedes ajustar según tu estructura de carpetas
    },
  },

  build: {
    outDir: 'dist', // Carpeta de salida de la construcción
    assetsDir: 'assets', // Carpeta de activos
    minify: 'esbuild', // Opciones de minificación (puedes cambiar a 'terser', por ejemplo)
  },

  esbuild: {
    // Configuración específica de Esbuild (opcional)
    jsxInject: `import React from 'react'`,
  },

  // Otras configuraciones según tus necesidades
};
