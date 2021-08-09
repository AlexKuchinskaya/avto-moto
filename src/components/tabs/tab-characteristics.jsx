import React from 'react';
import {TransportPropType} from '../../types/types';

const TabCharacteristics = ({characteristicsData}) => {
  const {characteristics} = characteristicsData;
  return (
    <div className="characteristics">
      <h2 className="visually-hidden">Характеристики</h2>
      <table className="characteristics__table">
        <tbody>
          {characteristics.map((item) => {
            return <tr key={item.name}>
              <td className="characteristics__data">{item.name}</td>
              <td className="characteristics__data characteristics__data--black">{item.value}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

TabCharacteristics.propTypes = {
  characteristicsData: TransportPropType
};
export default TabCharacteristics;
