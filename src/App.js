import { Provider } from 'react-redux';
import './App.css';
import Index from "./components/index";
import store from './Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
      theme='dark'
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover 
        />
      <Index />
    </Provider>
  );
}

export default App;
