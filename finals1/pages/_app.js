import "@/styles/globals.css";


/*Styles of Header and Footer*/
import "@/styles/HeaderFooter/header.scss"
import "@/styles/HeaderFooter/footer.scss"

/*Styles of index*/
import "@/styles/pagestyles/home.scss"

/*Import for Header and Footer*/
import Header from "@/Components/Constants/Header";
import Footer from "@/Components/Constants/Footer";

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
  <>
    <Header />
  <Component {...pageProps} />
  
  <Footer />
  </>
  )
}

export default App

