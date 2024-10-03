const { sentryEsbuildPlugin } = require('@sentry/esbuild-plugin');

module.exports = (serverless) => {
  return [
      sentryEsbuildPlugin({
        org: '',
        project: '',
        disable: !process.env.SOURCEMAPS,
        authToken:
          process.env.SOURCEMAPS === 'true'
            ? serverless.configurationInput.provider.environment.SENTRY_AUTH_TOKEN
            : undefined,
        sourcemaps: {
          assets: ['./.esbuild/.build/**/*'],
          filesToDeleteAfterUpload: ['./.esbuild/.build/**/*.js.map'],
        },
        telemetry: false,
        debug: true,
      }),
    ]
  }
