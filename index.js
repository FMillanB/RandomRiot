const Json = require('./valorant.json');

const getRandom = (value) => {
    return Math.floor(Math.random() * value);
}

function randomAgent(role){
    const Category = Json.Agents.filter((Category) => Category.rol == role);
    
    return Category[getRandom(Category.length)];
}

function randomRole(){
    const getRole = () => {
        switch (getRandom(4)) {
            case 0:
                return "Duelista";
            case 1:
                return "Controlador";
            case 2:
                return "Sentinela";
            case 3:
                return "Iniciador";
        }
    }
    return randomAgent(getRole());
}

module.exports.randomAgent = randomAgent;
module.exports.randomRole = randomRole;
