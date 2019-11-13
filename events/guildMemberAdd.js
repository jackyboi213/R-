module.exports = (client, member) => {
    var welcome = [WELCOME1,WELCOME2,WELCOME3,WELCOME4];
    var welcomes = welcome[Math.floor(Math.random()*WELCOME1,WELCOME2,WELCOME3,WELCOME4)];
    member.send(welcomes);
    let ROLE = member.guild.roles.find(role => role.name === "@Member");
    member.addRole(ROLE).then(console.log)
    .catch(console.error);
}

