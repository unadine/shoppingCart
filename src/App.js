import './App.css';
import MainContent from './components/Main';
import {ContextProvider} from "./Context";

function App() {
  return (
    <ContextProvider>
    <MainContent/>
      
    </ContextProvider>
  );
}

export default App;
