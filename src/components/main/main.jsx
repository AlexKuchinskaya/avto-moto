import Details from "../details/details";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";


const Main = ({transport}) => {
    return <>
      <Header />
      <main className="main">
        <div className="main__inner">
          <h1 className="visually-hidden">Avto Moto</h1>
          <Slider slides={transport} />
          <Details details={transport}/>
          
          {/* 
          <Content chars={ chars } />
          <Modal /> */}
  
        </div>
      </main>
      <Footer />
    </>
  }
  
  export default Main;
  