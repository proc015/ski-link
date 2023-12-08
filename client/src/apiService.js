
const url = "http://localhost:3000";

async function getLessons() {
  try {
    const data = await fetch(`${url}/lessons`);
    const response = await data.json();
    // console.log("getLessons data:", response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getClientLessons(userName) {
  try {
    const data = await fetch(`${url}/lessons/${userName}`);
    const response = await data.json();
    // console.log("getClientLessons data:", response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function postLessons(lessonObj) {
  try {
    const data = await fetch(`${url}/lessons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lessonObj),
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function postLogin(loginObj) {
  try {
    const data = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function postInstructorLogin(instructorObj) {
  try {
    const data = await fetch(`${url}/instructor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instructorObj),
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
      method: "PUT",
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function rejectLesson(id) {
  try {
    const data = await fetch(`${url}/lessons/${id}/reject`, {
      method: "PUT",
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

const coordinates = {
  Aspen: {
    lat: 39.1911,
    long: -106.8175,
  },
  Arapahoe: {
    lat: 39.6425,
    long: -105.8719,
  },
  Breckenridge: {
    lat: 39.4817,
    long: -106.0384,
  },
  Keystone: {
    lat: 39.5792,
    long: -105.9347,
  },
  Vail: {
    lat: 39.6403,
    long: -106.3742,
  },
};


async function getWeather (resortName) {
  
  const apiKey = '40898e103b782906f8b97d0274477058';

  if (!coordinates[resortName]) {
    throw new Error(`No coordinates found for resort: ${resortName}`);
  }

  const { lat, long } = coordinates[resortName];

  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    // console.log("getWeather data:", res);
    return res;
  } catch (err) {
    console.error("Error fetching weather data:", err);
    throw err;
  }
}


async function getReviews() {
  try {
    const data = await fetch(`${url}/reviews`);
    const response = await data.json();
    // console.log("getReviews data:", response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function postReviews(reviewObj) {
  try {
    const data = await fetch(`${url}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLessons,
  postLessons,
  acceptLesson,
  rejectLesson,
  getWeather,
  postLogin,
  postInstructorLogin,
  getClientLessons,
  getReviews,
  postReviews,
};
