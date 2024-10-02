import * as Sentry from '@sentry/aws-serverless';

Sentry.init({
  dsn: 'SENTRY_DSN',
  tracesSampleRate: 1.0,
});
