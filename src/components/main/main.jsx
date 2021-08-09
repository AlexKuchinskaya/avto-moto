import React from 'react';
import {TransportPropType} from '../../types/types';
import Details from "../details/details";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";
import TabCharacteristics from "../tabs/tab-characteristics";
import TabContacts from "../tabs/tab-contacts";
import TabReviews from "../tabs/tab-reviews";
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
            <TabCharacteristics characteristicsData={transport} />
          </div>
          <div label="Отзывы">
            <TabReviews reviewsData={transport}/>
          </div>
          <div label="Контакты">
            <TabContacts />
          </div>
        </Tabs>
      </div>
    </main>
    <Footer />
  </>;
};

Main.propTypes = {
  transport: TransportPropType
};

export default Main;
