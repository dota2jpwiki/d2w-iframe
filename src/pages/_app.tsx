import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { TextContext, useText } from '@/pages/components/Text'

export default function App({ Component, pageProps }: AppProps) {
  const text = useText()

  return <TextContext.Provider value={text}>
    <Component {...pageProps} />
  </TextContext.Provider>
}
