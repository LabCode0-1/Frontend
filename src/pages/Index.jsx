import React from 'react'





const Index = () => {
    return (
        <div className='centradito'>
       
          <p className='padio' >
              <div className='padio'>
  <a class="btn btn-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">SignIn</a>
  </div>
  <div className='padio'>
  <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">SignUp</button>
  </div>
        </p>

<div class="row">
  <div class="col" className='padio'>
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <div class="input-group mb-3">

<span class="input-group-text">Email</span>
<input type="email" class="form-control" placeholder="password" aria-label="Server"/>
</div>
<div class="input-group mb-3">

  <span class="input-group-text">Password</span>
  <input type="password" class="form-control" placeholder="password" aria-label="Server"/>
</div>
<div>
    <button class='btn btn-dark'> Log In </button>
</div>
       
      </div>
    </div>
  </div>
  <div class="col" className='padio'>
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Nombre</span>
  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<div class="input-group mb-3">

  <span class="input-group-text">Password</span>
  <input type="password" class="form-control" placeholder="password" aria-label="Server"/>
</div>
<div class="input-group mb-3">
  <input type="number" class="form-control" placeholder="Identificación" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">C.C</span>
</div>

<label for="basic-url" class="form-label">Desired rol</label>
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Rol</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Administrador</a></li>
    <li><a class="dropdown-item" href="#">Lider</a></li>
    <li><a class="dropdown-item" href="#">Estudiante</a></li>
    <li><hr class="dropdown-divider"/></li>
    
  </ul>
 
</div>
<div>
    <button class='btn btn-dark'>  sign in </button>
</div>


      </div>
    </div>
  </div>
</div>
          
        </div>
    )
}

export default Index






/*
const Index = () => {
    const [variable1,setVariable1]=useState("Variable por defecto");//parecido a getters y setters, dentro del useState va la varaible por defecto 

    const [valorInput,setValorInput]=useState('')

    const[valor1, setValor1]=useState(0);
    const[valor2, setValor2]=useState(0);
    const[suma,setSuma]=useState(0);

    //ESTAS FUNCIONES PUEDEN IR DIRECTAMENTE DENTRO DEL HTML
    //const clicksiño = () =>{
      //  setVariable1(valorInput)
    //}

    //const cambioInput = (e) => {// e es un evento, e.target me entrega otras las propiedades
      //  setValorInput(e.target.value)
    //}

    //EFECTOS SIRVEN PARA IDENTIFICAR CAMBIOS EN VARIABLES

    //useEffect(()=>{
      //  console.log('cambio variable 1 y el valor es: ', variable1);
    //},[variable1]); //un usetate sin array de dependencia, es jodido. uede termianr siendo un ciclo infinito 

    //componentes esteticos o funcionales
    //un boton decorado es componente funcional. 
    //layout es componente funcional. con un prop que se llama children. que permite personalizar el layout con contenido particular dependiendo de la página



    useEffect(()=>{
        console.log("valor 1 y 2 son ahora",valor1, valor2)
        setSuma(valor1 + valor2);
    },[valor1, valor2])


    return (
        <div >
            <div className="fondo-rojo">
                Holo
            <span> El valor de la variable es : </span>
            {variable1}
            </div>
            <div> el valor del input es {valorInput}</div>

            <input value ={valorInput} onChange={(e)=>{
                setValorInput(e.target.value);
            }}
             type="text" placeholder="ingrese nuevo valor para variable"/>
            <button onClick={(e)=>{
                setVariable1(valorInput)
            }}>
                Click prro</button> 

            <div>
                <h1>ejemplo de sumas</h1>
                <input 
                 value={valor1}
                 onChange={(e)=> setValor1(parseInt(e.target.value))}
                 placeholder='valor 1' type="number"/>
                <input
                value={valor2}                
                onChange={(e)=> setValor2(parseInt(e.target.value))}
                placeholder='valor 2' type="number"/>
                <sapn>la suma de los valores es : {suma}</sapn>
            </div>
        </div>
    )//onChange para ver cuando cambia y onClick para poner una función adentro y poner un evento. 
}   //en un input se puede definir una variable para obtener la variable del input
// la propiedad value es importante  para sacar info de un input o "quemar" un valor. 
//controlar un input significa asociar un estado, para tener info global de la pag para después mostrarla
//
export default Index
*/