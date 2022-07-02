// ici je récupère mes données. Un resolver permet de récupérer les données en base de données via une requête. Vous avez besoin d'autant de resolvers que de schemas.
// il y a 2 types de resolvers : Query et Mutation
/* À propos des opérations de type query et mutation ​
Pour faire un parallèle avec le standard REST, les queries se comportent comme des requêtes GET et 
les mutations se comportent comme des requêtes POST / PATCH / DELETE . Le nom de la mutation détermine 
l'opération qui sera executée.*/

const dataMapper = require("./datamapper");

const Query = {
  getAllPersons(){
    return dataMapper.findAll();
  },

  getPersonsByName(_, args){
    const column = Object.keys(args)[0];
    return dataMapper.findByName(args.lastname,column);
  },
  getPersonsByDate(_, args){
    return dataMapper.findByDate(args.date);
  }
};


const Mutation = {
  createPerson(_,args){
      return dataMapper.insertPerson(args);
  },
  deleteByDate(_,args){
      return dataMapper.deleteByDate(args.birthdate);
  },
  updateByName(_,args){
      return dataMapper.updateByName(args.oldname,args.newname);
  }
};

module.exports = {
  Query,
  Mutation
}