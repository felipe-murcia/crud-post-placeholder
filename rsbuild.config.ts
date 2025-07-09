import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const defaultDistPath = {
  root: 'public'
};

export default defineConfig({
  plugins: [pluginReact()],
  output:
    {
      distPath: defaultDistPath,
    },
});
