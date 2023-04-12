
import Header from  "../src/componentes/Header";
import Footer from "../src/componentes/Footer";
import Main from "../src/componentes/Main"
import NavBar from "../src/componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
  <>
  <Header />
  <NavBar/>
  <Main titulo="Main"/>
  <ItemListContainer greeting="Contenido Greeting"/>
  <Footer/>
  </>
  )

}
export default App;
