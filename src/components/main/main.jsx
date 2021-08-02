import Details from "../details/details";
import Footer from "../footer/footer";
import Header from "../header/header";


const Main = () => {
    return <>
      <Header />
      <main className="main">
        <div className="main__inner">
          <h1 className="visually-hidden">Avto Moto</h1>
          {/* <Details /> */}
          {/* <Slider slides={ slides } />
          <Content chars={ chars } />
          <Modal /> */}
  
        </div>
      </main>
      <Footer />
    </>
  }
  
  export default Main;
  