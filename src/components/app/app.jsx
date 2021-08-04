import Main from '../main/main';
import { TRANSPORT } from '../mocks/mock';


const App = () =>  {
  return (
    <>
        <Main  transport={TRANSPORT}/>
    </>
  );
}

export default App;