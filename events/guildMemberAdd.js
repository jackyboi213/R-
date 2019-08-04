module.exports = (client, member) => {
    var welcome = [WELCOME+(1,4)];
    var welcomes = welcome[Math.floor(Math.random()*WELCOME+(1-4))];
    member.send(welcomes).then().catch(console.error);
    member.addRole(ROLE).then(console.log)
    .catch(console.error);
}
Number
