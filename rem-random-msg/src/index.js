const messages = [
    "Ana",
    "Diego",
    "Nikolai",
    "Jose",
    "María",
    "Jose",
    "Carlos",
    "Peter",
    "Andres"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};