module.exports = (client, member) => {
    var welcome = [WELCOME1,WELCOME2,WELCOME3,WELCOME4];
    var welcomes = welcome[Math.floor(Math.random()*WELCOME1,WELCOME2,WELCOME3,WELCOME4)];
    let ROLE = member.guild.roles.find(role => role.name === "@Member");
    member.send
    (welcomes).then().catch(console.error);
    member.addRole(ROLE).then().catch(console.error);
}

