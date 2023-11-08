const url = 'http://localhost:3000'

async function getLessons () {
    try {
        const data = await fetch (`${url}/lessons`);
        const response = await data.json(); 
        return response; 
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getLessons}