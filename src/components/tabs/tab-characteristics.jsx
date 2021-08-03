const TabCharacteristics = ({characteristicsData}) => {
    const {characteristics} = characteristicsData
    console.log(`characteristics`, characteristics)
    return <>
        <h2 className="visually-hidden">Характеристики</h2>
        <table className="characteristics__table">
            <tbody>
                {characteristics.map((item) => {
                    return <tr>
                        <td className="characteristics__data">{item.name}</td>
                        <td className="characteristics__data characteristics__data--black">{item.value}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    </>
  };
  

  
  export default TabCharacteristics;