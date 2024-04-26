import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Productlist from './Reducer/Productlist';
import Store from './Store/Store';

function App() {
  return (
   <>
   <Provider store={Store}>
      <Productlist/>
   </Provider>
   
   </>
  );
}

export default App;
