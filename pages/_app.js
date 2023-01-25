import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css';
import { Provider } from 'react-redux';
import Store from '../reducers/Store';

export default function App({ Component, pageProps, session }) {
  return (
    <Provider store={Store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}
