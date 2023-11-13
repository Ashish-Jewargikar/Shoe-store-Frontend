import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>   
    <title>Shoe Store</title> 
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
    )
}