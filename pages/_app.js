import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store, persistor } from '../reducers/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps, session }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}
