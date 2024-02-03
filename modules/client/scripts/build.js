import env from 'env-var'
import esbuild from 'esbuild'
import { cleanPlugin } from 'esbuild-clean-plugin'
import { htmlPlugin } from '@craftamap/esbuild-plugin-html'

const target = env.get('TARGET').required().asString()
const apiPrefix = env.get('API_PREFIX').required().asString()

esbuild
  .build({
    entryPoints: ['src/App.tsx'],
    assetNames: 'asset/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
    outdir: 'dist',
    bundle: true,
    metafile: true,
    format: 'esm',
    splitting: true,
    target: [
      'es2020'
    ],
    loader: {
      '.woff2': 'copy',
      '.woff': 'copy',
    },
    plugins: [
      cleanPlugin({
        verbose: true,
      }),
      htmlPlugin({
        files: [
          {
            entryPoints: ['src/App.tsx'],
            filename: 'index.html',
            htmlTemplate: 'static/index.html',
          },
        ],
      }),
    ],
    define: {
      'ENV.TARGET': target,
      'ENV.API_PREFIX': apiPrefix,
    },
  })
  .then(async result => {
    if (result.errors.length > 0) {
      console.error('errors Encountered', result)
      return
    }

    console.log('Build Complete, Warnings:', result.warnings)
  })
