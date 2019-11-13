module.exports = (client, member) => {
    var welcome = [WELCOME1,WELCOME2,WELCOME3,WELCOME4];
    var welcomes = welcome[Math.floor(Math.random()*WELCOME1,WELCOME2,WELCOME3,WELCOME4)];
    member.send(welcomes).then().catch(console.error);
    let ROLE = guild.roles.find(r => r.name === "@Member");
    member.addRole(ROLE).then(console.log)
    .catch(console.error);
}

