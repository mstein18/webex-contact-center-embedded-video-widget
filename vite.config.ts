import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'WebexVideoWidget',
      fileName: (format) => `webex-video-widget.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Externalize dependencies that will be provided at runtime
      external: ['webex', '@wxcc-desktop/sdk'],
      output: {
        globals: {
          'webex': 'Webex',
          '@wxcc-desktop/sdk': 'Desktop'
        }
      }
    },
    outDir: 'dist'
  }
});