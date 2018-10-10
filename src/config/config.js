let baseUrl = '';
if (process.env.NODE_ENV === 'production')
   baseUrl = 'http://yourdomain.com/';
else
   baseUrl = 'http://localhost:3003/';
export const apiHost = baseUrl
