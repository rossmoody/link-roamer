import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import zip from 'rollup-plugin-zip'
import replace from '@rollup/plugin-replace'

const isProduction = process.env.NODE_ENV === 'production'

const NODE_ENV = isProduction
  ? JSON.stringify('production')
  : JSON.stringify('development')

const apiConfig = {
  input: 'src/api/index.ts',
  output: {
    dir: 'dist/api',
    format: 'esm',
  },
  plugins: [typescript()],
  external: ['node-fetch', '@google-cloud/functions-framework'],
}

const v2Manifest = {
  input: 'src/v2-manifest.json',
  output: {
    dir: 'dist/v2-manifest',
    format: 'esm',
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': NODE_ENV,
      isV3Manifest: '',
      preventAssignment: true,
    }),
    chromeExtension(),
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
    emptyDir(),
    isProduction && zip({ dir: 'releases/v2-manifest' }),
  ],
}

const v3Manifest = {
  input: 'src/v3-manifest.json',
  output: {
    dir: 'dist/v3-manifest',
    format: 'esm',
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': NODE_ENV,
      isV3Manifest: 'true',
      preventAssignment: true,
    }),
    chromeExtension(),
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
    emptyDir(),
    isProduction && zip({ dir: 'releases/v3-manifest' }),
  ],
}

export default [apiConfig, v2Manifest, v3Manifest]
