import Details from "../details/details";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";
import TabCharacteristics from "../tabs/tab-characteristics";
import TabContacts from "../tabs/tab-contacts";
import Tabs from "../tabs/tabs";


const Main = ({transport}) => {
    return <>
      <Header />
      <main className="main">
        <div className="main__inner">
          <h1 className="visually-hidden">Avto Moto</h1>
          <Slider slides={transport} />
          <Details details={transport}/>
          <Tabs>
                <div className="characteristics" label="Характеристики">
                <TabCharacteristics characteristicsData={transport} />
                </div>
                <div label="Tab3">
                    <h2>Tab3</h2>
                    <p>Helloooooo</p>
                </div> 
                <div label="Контакты">
                    <TabContacts />
                </div>
          </Tabs>
  
        </div>
      </main>
      <Footer />
    </>
  }
  
  export default Main;
  