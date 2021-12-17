import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from '../../graphql/users/queries';


const Usuarios = () => {
    const {data, error, loading} = useQuery(GET_USUARIOS);


    useEffect(()=>{ 
      console.log('data servidor', data);
  
    },[data]);
    

    return (
        <div className='padio'>
        <table class="table">
<thead>
<tr>
  
  <th scope="col">email</th>
  <th scope="col">nombre</th>
  <th scope="col">identificacion</th>
  <th scope="col">estado</th>
  <th scope="col">rol</th>
</tr>
</thead>
<tbody>
{data && 
data.getUsers.map((u)=>{
  return (
    <tr key ={u._id}>
      <td>{u.nombre}</td>
      <td>{u.mail}</td>
      <td>{u.identificacion}</td>
      <td>{u.estado}</td>
      <td>{u.rol}</td>

    </tr>

  )
})}


</tbody>
</table>
        
    </div>
    )
}

export default Usuarios
