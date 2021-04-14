/* emilien <emilien@emilien-lx>, 2021 */

import { Head } from 'next/document';
import GlobalStyles from '@/components/GlobalStyles'

export default function App({ Component, pageProps }) {
	return (
		<>
		<GlobalStyles />
		<Component {...pageProps} />
		</>
	)
}
