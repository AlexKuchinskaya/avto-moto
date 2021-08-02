import Main from '../main/main';
import { TRANSPORT } from '../mocks/details';


const App = () =>  {
  return (
    <>
        <Main  transport={TRANSPORT}/>
    </>
  );
}

export default App;