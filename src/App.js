import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes';
import { DataProvider } from './context/Dataprovider';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <RoutesApp/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
