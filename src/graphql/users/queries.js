import {gql} from '@apollo/client'

const GET_USUARIOS = gql`
query GetUsers {
    getUsers {
      id
      mail
      identificacion
      nombre
      password
      rol
      estado
    }
  }

`
export {GET_USUARIOS};
