## serverless-sentry-esbuild

Bug reproduction for repeated sourcemap uploads by [sentry esbuild plugin](https://docs.sentry.io/platforms/javascript/guides/aws-lambda/sourcemaps/uploading/esbuild/) when used as a plugin within [serverless-esbuild](https://www.serverless.com/plugins/serverless-esbuild)

### Steps to reproduce
1. Fork this repository
2. using node v18.14.0, `cd zambdas && npm install`
3. Add your sentry DSN to to `instrument.mjs`
4. Add your organization name and project name to `esbuild.plugins.js`
5. Add your sentry auth token to `.env/local.json`
6. Push your commits then run the `Package test` workflow in Github Actions

**Expected result:** Sourcemaps are uploaded to Sentry once

**Actual result:** Sourcemaps are uploaded to Sentry repeatedly with increasing bundle size. The number of bundles uploaded each time is random.