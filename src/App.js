import './App.css';
import Footer from "./Footer";
import Main from "./Main"
import Header from "./Header"
import ItemListContainer from "./components/ItemListContainer"

// class App extends React.Component {
  
//   // El metodo render se ejecuta cuando 
//   // un componente entra en pantalla
//   render(
//       <>
//         <header>
//           <h1></h1>
//         </header>
//         <footer>
//           <p>&copy; Copyright</p>
//         </footer>
//   )
// }
const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer/>
      {/* <Main/>
      <Footer/> */}
    </>
  );
}

export default App;
