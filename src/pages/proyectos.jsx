import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/project/queries'


const Proyectos = () => {
  const {data, error, loading} = useQuery(GET_PROJECT);


  useEffect(()=>{ 
    console.log('data servidor', data);

  },[data]);

    return (
        <div>
            <div class="row" className='padio'>
              {data &&
              data.misProyectos.map((p)=>{
                return(
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{p.nombre}</h5>
                    <p class="card-text">{p.objetivosGenerales}</p>
                    <p class="card-text">{p.estado}</p>
                    <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
                </div>
              </div>

              )})}

  </div>
</div>
            
            
       
    )
}

export default Proyectos
