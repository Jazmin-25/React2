import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';

function App() {
  return (
    <div>
      <Lista defaultTitle="Selecciona tu primera opción de navegador: " />
      <br/>
      <Lista defaultTitle="Selecciona tu segunda opción de navegador: " />
    </div>
  );
}

export default App;
