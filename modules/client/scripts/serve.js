import esbuild from 'esbuild'
import * as http from 'http'
import env from 'env-var'
import { cleanPlugin } from 'esbuild-clean-plugin'
import { htmlPlugin } from '@craftamap/esbuild-plugin-html'
import { config } from 'dotenv'

config()

const target = env.get('TARGET').required().asString()
const localPort = env.get('LOCAL_PORT').required().asString()

// https://gist.github.com/martinrue/2896becdb8a5ed81761e11ff2ea5898e

const serve = async (servedir, listen) => {
  // Start esbuild's local web server. Random port will be chosen by esbuild.
  const ctx = await esbuild.context({
    entryPoints: ['src/App.tsx'],
    outdir: servedir,
    assetNames: 'asset/[name]',
    bundle: true,
    metafile: true,
    format: 'esm',
    loader: {
      '.woff2': 'copy',
      '.woff': 'copy',
    },
    plugins: [
      cleanPlugin(),
      htmlPlugin({
        files: [
          {
            entryPoints: ['src/App.tsx'],
            filename: 'index.html',
            htmlTemplate: 'static/index.html',
            // findRelatedCssFiles: true,
          },
        ],
      }),
    ],
    define: {
      'ENV.TARGET': target,
      'ENV.LOCAL_PORT': localPort,
    },
  })

  const { host, port } = await ctx.serve({
    servedir,
  })

  // Create a second (proxy) server that will forward requests to esbuild
  const proxy = http.createServer((req, res) => {
    // forwardRequest forwards an http request through to esbuid.
    const forwardRequest = path => {
      const options = {
        hostname: host,
        port,
        path,
        method: req.method,
        headers: req.headers,
      }

      const proxyReq = http.request(options, proxyRes => {
        if (proxyRes.statusCode === 404) {
          // If esbuild 404s the request, assume it's a route needing to
          // be handled by the JS bundle, so forward a second attempt to `/`.
          return forwardRequest('/')
        }

        // Otherwise esbuild handled it like a champ, so proxy the response back.
        res.writeHead(proxyRes.statusCode, proxyRes.headers)
        proxyRes.pipe(res, { end: true })
      })

      req.pipe(proxyReq, { end: true })
    }

    // When we're called pass the request right through to esbuild.
    forwardRequest(req.url)
  })

  // Start our proxy server at the specified `listen` port.
  proxy.listen(listen)

  console.log('Ready')
}

// If esbuild 404s the request, the request is attempted again
// from `/` assuming that it's an SPA route needing to be handled by the root bundle.
serve('tmp', 1234)
