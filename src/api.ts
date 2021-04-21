/* emilien <emilien@emilien-lx>, 2021 */

import axios from 'axios';

/**
 * Get user emails list from server.
 */
export const fetchEmails = () => axios.get('/api/emails');
