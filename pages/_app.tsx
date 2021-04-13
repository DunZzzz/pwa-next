/* emilien <emilien@emilien-lx>, 2021 */

import { Head } from 'next/document';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyles from '@/components/GlobalStyles'

//const GlobalStyle = createGlobalStyle`
//  body {
//	margin: 0;
//	padding: 0;
//	box-sizing: border-box;
//  }
//`

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

export default function App({ Component, pageProps }) {
	return (
		<>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
		<Component {...pageProps} />
		</ThemeProvider>
		</>
	)
}
