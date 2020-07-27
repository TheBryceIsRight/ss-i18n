import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'dev-eghp9tj3.us.auth0.com',
  clientId: 'a5gj4Gifg1CAc8HvHhjD9EBa7c2p77jD',
  clientSecret: 'xOiyqYaveMYLm6AoIOGR8U4AiGbOIsmht-K0EGd_88IwjkvI8RITXNNRUbKuc2bh',
  scope: 'openid profile',
  redirectUri: 'https://system-status.vercel.app/api/callback',
  postLogoutRedirectUri: 'https://system-status.vercel.app/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: 'some-very-very-very-very-very-very-very-very-long-secret',
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000
  }
});