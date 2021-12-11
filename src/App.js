import { BrowserRouter,Routes, Route  } from "react-router-dom";
import './App.css';
import Index from './pages/Index.jsx';
import Proyectos from "./pages/proyectos.jsx";
import './styles/styles.css';
import Usuarios from "./pages/admin/Usuarios";
import LayoutAdmin from "./Layout/LayoutAdmin";
import IndexAdmin from "./pages/admin/Index";
import User from "./pages/users.jsx"
import Sidebar from "./components/Sidebar";
import Layout from "./Layout/Layout";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='i' element={<Index />}/>
            <Route path='/proyectos' element={<Proyectos />}/>
            <Route path='/user' element={<User />}/>
            <Route path='/admin' element={<LayoutAdmin/>}>
          </Route>
            <Route path='' element={<IndexAdmin/>}/>
            <Route path='usuarios' element={<Usuarios/>}/>            
          </Route>


        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
