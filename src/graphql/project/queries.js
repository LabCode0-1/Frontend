import {gql} from '@apollo/client'

const GET_PROJECT = gql`
query MisProyectos {
    misProyectos {
      id
      nombre
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      fechaFinal
      fechaInicio
      progress
      estado
      fase
    }
  }

`
export {GET_PROJECT};