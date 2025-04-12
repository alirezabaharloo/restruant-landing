import Header from './components/Header/Header.jsx'
import Products from './components/Products/Products.jsx'
import SaleOff from './components/SaleOff/SaleOff.jsx'
import IntroduceApp from './components/IntroduceApp/IntroduceApp.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  return (
    <section className='mx-[1.5rem]'>
        <Header />
        <Products />
        <SaleOff />
        <IntroduceApp />
        <SearchBox />
        <Footer />
    </section>
  )
}

export default App
