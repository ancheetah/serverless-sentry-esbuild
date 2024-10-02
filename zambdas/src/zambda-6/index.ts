import '../../instrument.mjs';
import { APIGatewayProxyResult } from 'aws-lambda';
import { wrapHandler } from '@sentry/aws-serverless';

export const index = wrapHandler(async (input: any): Promise<APIGatewayProxyResult> => {
  try {
    console.log('zambda-6', input);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'zambda-6 suceeded',
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'zambda-6 failed',
      }),
    };
  }
});
