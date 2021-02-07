// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyDsWEJaENnYTAKg9ZoYUi4WtN6q4f8m7tQ',
  authDomain: 'tasks-11f98.firebaseapp.com',
  databaseURL: 'https://tasks-11f98-default-rtdb.firebaseio.com',
  projectId: 'tasks-11f98',
  storageBucket: 'tasks-11f98.appspot.com',
  messagingSenderId: '329232197301',
  appId: '1:329232197301:web:6643247bf89307f1ad00fc'
};

// const firebaseConfig = {
//   "type": "service_account",
//   "project_id": "tasks-11f98",
//   "private_key_id": "e915c485b499fb3be3e393fdea24cedd6f064242",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/S/IJRPjDFsss\nEW1Sv2k5Si73h5eYFQUmH/tGVURuS7RLEd5pEPBKz7lZaqHVwJbrRnNC7QzZuUXU\nKU0GyH/0HCDm8L+cmw9UlE0h6P0QjXNL12ZZHx4RlxrBrpgtt/CPBDX0q4jT7zyJ\nev/Oskxr51TRjRqEQjhzYmHOIzOxiHLEQdfOk9yQaJbxsOC5CZeM93YAds6t8/jK\nT6xjVn4wXQaMiZ+9a6Q8LHX7e3E6eL6gztmO6MH7J0InseDnD7td9nrZm3PVsETf\n/C8UDbVsQqAVNJ85O1ZtyyxAtUozUNvvA2n7rosft8kxfdyxp0eQh2uiuxxr0gvL\nXqRhLdfLAgMBAAECggEABs0ljPSehZn4Kks9hrbwf+cMnKQxAxxVA27l3H41AYwZ\ntZ7FuH8vxyRaJv0DRc0w1t4GRHrKI9/4kbUDaWDUKWYD03ViBdux473Y488O8R/R\njOcN9NA5UPXKFgwyzYYf/IdXso9gvR96sjnYNRo79lnFhCSb4AtWSqy7GBZ1t/Od\n9GLRn1HUspOMsdL/8zEPJxUW04+To5FYkI0YZh/Rp5B07aiCe8ezTug/gWCAwuj+\n4+NVVXmRFPYq2Vo1zJkbXF4tK7uYtE9EMd87bVqk+HoFh4yIqRazfD6zQo4Yr5m0\n1yVuiGA4pNk4vcETt73J3Dk879vWT8qYAxsCaSICiQKBgQDiJBTppQD0cAjD1TFs\ngtYHG+pVv0LBroOTNBQbkNkshK92fm6K0uRcsEIXcCyIwy/+vPt7UQevcTI+6CPx\nV0q6+0bWbF4nZvE+XMtUPmJflmy68gvu9B6ZxU3tcAQlpJtjinZ+BwAvHmhsLjLZ\ndGY4/eoWcQDmXv7eKceHL82oyQKBgQDYjhKKGkvriuJ9+ocafuNbVqrv865gTgGa\nljcRETiqbwIpJwfDOHKSJ/PngxQMYT/qkFuDJ+2DmXQumXOjmVaXFMlhOGiBRxk8\ngfUWZ+H9vfOO8HWmJhcU6KzDGXNLX6dkU0sizOGqNiBrIiQ7nBnpSy33Jhs5/b1Y\n7gAGGCMZ8wKBgBxkM0vyL2CBAFi113KsKnrSAmWpkZQHePVuQGgFk36HWhAiZ3Z+\na7VHW8TdjHnPJ6NvzpL45WIdcBV9x6VxNCyth4M8L8X6oqcVt2FoQ6mElToTUXQ6\nqezcXKBGw/6F4AxrQd0ou9kulCWg1zl956eYGV+f6GED5DO4Qxix47whAoGBAMjL\n86TafUsKnLjzdBK9VVN8KUQVT7s8mYAdiTHqJgDirb460pfR32pmYWJpyE0yX3HA\nKRqUC0fbIj+TSgaISCIOxCvBgiVdJ6lTV05PRN1jJFOF45EMAJsCpC7DioR5TV1Z\nXnIGR7jsN2MfZTlgpSYM77IbQ2OiQ9AR3zPHbcTBAoGAdlTJLt+NoFGc8UJ8GoNW\ntU+UZibH62spT3N8l9ww7BR1hj13jLfAgpkbE9PDeZzx5I0Wu+8U1TRjVFk/pjMK\n4YzCVdCV78wrjs7czEsW7RxByseHwwza1B+RwVnQoL99K1gDfCdf63yvt0sKf78i\n+COSGrGa+0YPzrv155s+6JA=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-521ba@tasks-11f98.iam.gserviceaccount.com",
//   "client_id": "117844442701636979054",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-521ba%40tasks-11f98.iam.gserviceaccount.com"
// };

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
