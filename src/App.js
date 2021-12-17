import { BrowserRouter,Routes, Route,  } from "react-router-dom";
import { useState } from "react";
import {ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client"
import './App.css';
import Index from './pages/Index.jsx';
import Proyectos from "./pages/proyectos.jsx";
import './styles/styles.css';
import Usuarios from "./pages/admin/Usuarios";
import LayoutAdmin from "./Layout/LayoutAdmin";
import IndexAdmin from "./pages/admin/Index";
import Users from "./pages/users.jsx"

import Layout from "./Layout/Layout";
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors,networkError})=>{
  if(graphqlErrors){ 
    graphqlErrors.map(({message, location,path}) =>{
      alert(`Graphql error ${message}`);
    } )
    
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:4000/"})
]);

 const client = new ApolloClient ({
   cache: new InMemoryCache(), 
   link: link,
 })

function App() {
  const [userData, setUserData] = useState({})


  return (
      <ApolloProvider client={client}> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Index />}/>
            <Route path='/proyectos' element={<Proyectos />}/>
            <Route path='/user' element={<Users />}/>
            <Route path='/admin' element={<LayoutAdmin/>}>
          </Route>
            <Route path='' element={<IndexAdmin/>}/>
            <Route path='admin/usuarios' element={<Usuarios/>}/>            
          </Route>


        </Routes>      
      </BrowserRouter>
      </ApolloProvider>
   
  );
}

export default App;
