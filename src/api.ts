/* emilien <emilien@emilien-lx>, 2021 */

import axios from 'axios';

let $axios = axios.create({
  baseURL: 'http://52.91.170.178/',
  timeout: 30000,
})
/**
 * Get user emails list from server.
 */
export const fetchEmails = () => axios.get('/emails');
