import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Pagina1 } from "./pages/Pagina1";
import { Pagina2 } from "./pages/Pagina2";
import { Pagina3 } from "./pages/Pagina3";
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import FormExample from "./pages/FormExample";
import "./index.css";

const App = () => {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <PrivateRoutes /> }>
        <Route path="" element={ <Home /> } />
        <Route path="home" element={ <Home /> } />
        <Route path="pagina1" element={ <Pagina1 /> } />
        <Route path="pagina2" element={ <Pagina2 /> } />
        <Route path="pagina3" element={ <Pagina3 /> } />
        <Route path="formulario" element={ <FormExample /> } />
      </Route>
      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  </>)
};

export default App