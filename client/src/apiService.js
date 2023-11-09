const url = 'http://localhost:3000'

async function getLessons () {
    try {
        const data = await fetch (`${url}/lessons`);
        const response = await data.json(); 
        console.log('getLessons data:', response)
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

async function acceptLesson(id) {
    try {
        const data = await fetch(`${url}/lessons/${id}/accept`, {
        method: 'PUT'
        })
        const response = await data.json(); 
        return response; 
    } catch (err) {
        console.log(err);
    }

}

async function rejectLesson(id) {
    try {
        const data = await fetch(`${url}/lessons/${id}/reject`, {
        method: 'PUT'
        })
        const response = await data.json(); 
        return response; 
    } catch (err) {
        console.log(err);
    }
}


const weatherUrlOne = 'https://api.tomorrow.io/v4/timelines?location=39.1911, -106.8175&fields=temperature,snowAccumulation,weatherCode&timesteps=1d&units=imperial&apikey=XJ9HcYeTXjk0sPHLbU72f9x0NZFb8uno'

const weatherUrlTwo = 'http://api.openweathermap.org/data/2.5/forecast?lat=39.6403&lon=-106.3742&appid=40898e103b782906f8b97d0274477058' 

async function getWeather () {
    try {
        const data = await fetch(`${weatherUrlTwo}`);
        console.log(data)
        const res = await data.json(); 
        console.log('getWeather data:', res)
        return res; 
    } catch (err) {
        console.log(err);
    }
}



module.exports = {getLessons, postLessons, acceptLesson, rejectLesson, getWeather }