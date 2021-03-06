import ENV, { API_ENV } from '../api/ENV';
let apiBase;
let base;
if (API_ENV === 'local') {
  apiBase = 'http://localhost:1337/api/v1/';
  base = 'http://localhost:1337';
} else if (API_ENV === 'dev' || API_ENV === 'development') {
  apiBase = 'https://api-dev.thegoodparty.org/api/v1/';
  base = 'https://dev.thegoodparty.org';
} else if (API_ENV === 'prod') {
  apiBase = 'https://api.thegoodparty.org/api/v1/';
  base = 'https://thegoodparty.org';
}

const apiHelper = { apiBase, base };
export default apiHelper;
