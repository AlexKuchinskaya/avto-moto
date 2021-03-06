export const TRANSPORT = {
  id: 1,
  pictures: [
    {
      name: `Picture 1`,
      url: `./img/slide-1.jpg`
    },
    {
      name: `Picture 2`,
      url: `./img/slide-2.jpg`
    },
    {
      name: `Picture 3`,
      url: `./img/slide-3.jpg`
    }
  ],
  name: `Марпех 11`,
  price: {
    current: `2 300 000`,
    old: `2 400 000`,
    credit: `11 000`,
  },
  paremetres: {
    fuel: `бензин`,
    transmission: `механика`,
    horsepower: `100 л.с.`,
    volume: `1.4 л`,
  },
  characteristics: [
    {
      name: `Трансмиссия`,
      value: `Роботизированная`
    },
    {
      name: `Мощность двигателя, л.с.`,
      value: `249`
    },
    {
      name: `Тип двигателя`,
      value: `Бензиновый`
    },
    {
      name: `Привод`,
      value: `Полный`
    },
    {
      name: `Объём двигателя, л`,
      value: `2.4`
    },
    {
      name: `Макс. крутящий момент`,
      value: `379/4500`
    },
    {
      name: `Количество цилиндров`,
      value: `4`
    },
  ],

  reviews: [
    {
      user: `Борис Иванов`,
      pros: `мощность, внешний вид`,
      cons: `Слабые тормозные колодки (пришлось заменить)`,
      rating: 3,
      comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
      date: `1`
    },
    {
      user: `Марсель Исмагилов`,
      pros: `Cтиль, комфорт, управляемость`,
      cons: `Дорогой ремонт и обслуживание`,
      rating: 3,
      comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
      date: `1`
    }
  ]
};
