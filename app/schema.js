/* Le schéma est central dans GraphQL. Il dicte la communication entre le client
et le serveur. Il spécifie :
- les requêtes que les clients peuvent faire
- les types de données récupérables
- les relations entre ces types
Tout est définie dans ce schéma à commencer par la requête racine */

/* - Scalar
Le scalar est le type à définir pour les données que vous utilisez et les données que vous souhaitez renvoyer.

Les scalar par défaut existant sont les suivants :

Int, Float, String, Boolean and ID */


const {gql} = require("apollo-server-express");

const schema = gql`

scalar Date

type Person{
    lastname: String!,
    firstname: String!,
    birthdate: Date
}

type Query {
    getAllPersons: [Person]
    getPersonsByName(lastname: String,firstname: String): [Person]
    getPersonsByDate(date: Date!): [Person]
}

type Mutation{
    createPerson(lastname: String!,firstname: String!,birthdate: Date) : Person
    deleteByDate(birthdate: Date!) : Boolean
    updateByName(oldname: String!,newname: String!) : Person
}

`;

module.exports = schema;