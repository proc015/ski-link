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


async function postLessons (lessonObj) {
    try {
        const data = await fetch(`${url}/lessons`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(lessonObj)
        }); 
        const response = await data.json(); 
        return response; 
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getLessons, postLessons}