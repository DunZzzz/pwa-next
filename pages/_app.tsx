/* emilien <emilien@emilien-lx>, 2021 */

import { Head } from 'next/document';
import GlobalStyles from '@/components/GlobalStyles';
import '@/assets/globals.css';
import { makeServer } from '@/src/mirage_mocking';
import { wrapper } from '@/src/store';

if (process.env.NODE_ENV === 'development') {
	makeServer({ environment: 'development' });
}

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<GlobalStyles />
		<Component {...pageProps} />
	</>
);

export default wrapper.withRedux(WrappedApp);
