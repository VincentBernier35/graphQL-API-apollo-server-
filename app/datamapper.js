// avant de pouvoir récupérer les données par le biais de nos resolvers, nous allons tout d'abord créer nos requêtes dans le datamapper.

//les requêtes CRUD de notre API

const client = require("./dbClient");

const dataMapper = {
  // fetch data 
  async findAlll(){
    const result = await client.query('SELECT * FROM person;');
    return result.rows;
  },

  async findByName(name) {
    const result = await client.query(`SELECT * FROM "person" WHERE "firstname" = $1;`, [name]);
    return result.rows;
  },

  async findByDate(birthdate) {
    const result = await client.query('SELECT * FROM "person" WHERE "birthdate" = $1;', [birthdate]);
    return result.rows;
  }, 

  // create data
  async insertPerson(person){
    const preparedQuery = `
        INSERT INTO person
            (lastname, firstname, birthdate) VALUES
            ($1, $2, $3) RETURNING *;
    `;
    const result = await client.query(preparedQuery,[person.lastname,person.firstname,person.birthdate]);
    
    return result.rows[0];
  },

  // delete data
  async deleteByDate(date){
    const preparedQuery = "DELETE FROM person WHERE birthdate = $1";
    console.log(date);
    const result = await client.query(preparedQuery,[date]);
    //console.log(result);
    return true;
  },

  // update data
  async updateByName(oldname,newname){
    const result = await client.query("UPDATE person set lastname=$1 where lastname=$2 RETURNING *",[newname,oldname]);

    return result.rows[0];
  }
}

module.exports = dataMapper;