const Json = require('./valorant.json');
const fetch = require('node-fetch');

const getRandom = (value) => {
    return Math.floor(Math.random() * value);
}

async function randomAgent(role, lang){
    let response = await fetch(`https://valorant-api.com/v1/agents?language=${lang}&isPlayableCharacter=true`)
    response = await response.json()

    const Agent = response.data.filter((Agent) => Agent.role.displayName == role);
    
    return Agent[getRandom(Agent.length)];
}

function randomRole(lang){
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
    return randomAgent(getRole(), lang);
}

async function getByName(name, lang){
    let response = await fetch(`https://valorant-api.com/v1/agents?language=${lang}&isPlayableCharacter=true`)

    response = await response.json()

    const Agent = response.data.filter((agent) => agent.displayName == name);

    return Agent[0]
}

async function getByRole(role, lang){
    let response = await fetch(`https://valorant-api.com/v1/agents?language=${lang}&isPlayableCharacter=true`)

    response = await response.json()

    const Agent = response.data.filter((Agent) => Agent.role.displayName == role);

    return Agent
}

module.exports.getByRole = getByRole
module.exports.getByName = getByName;
module.exports.randomAgent = randomAgent;
module.exports.randomRole = randomRole;
