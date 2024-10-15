import Cabecalho from "./components/Cabecalho";
import Calculadora from "./components/Calculadora";

function App() {

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Calculadora />

        <footer className="footer">
          Desenvolvido por <a href="https://github.com/ademirsoares" target="_blank">Ademir Soares</a>
          </footer>
      </div>
    </>
  )
}

export default App;
