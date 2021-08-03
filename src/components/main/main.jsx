import Details from "../details/details";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";
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
                
          <div label="Характеристики">
                    <h2>Характеристики</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Трансмиссия</td>
                                <td>Роботизированная</td>
                            </tr>
                            <tr>
                                <td>Мощность двигателя, л.с.</td>
                                <td>249</td>
                            </tr>
                            <tr>
                                <td>Тип двигателя</td>
                                <td>Бензиновый</td>
                            </tr>
                            <tr>
                                <td>Привод</td>
                                <td>Полный</td>
                            </tr>
                            <tr>
                                <td>Объем двигателя, л</td>
                                <td>2.4</td>
                            </tr>
                            <tr>
                                <td>Макс. крутящий момент</td>
                                <td>370/4500</td>
                            </tr>
                            <tr>
                                <td>Количество цилиндров</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div label="Tab2">
                    <h2>Tab2</h2>
                    <p>Helloooooo</p>
                </div>
                <div label="Tab3">
                    <h2>Tab3</h2>
                    <p>Helloooooo</p>
                </div> 
          </Tabs>
  
        </div>
      </main>
      <Footer />
    </>
  }
  
  export default Main;
  