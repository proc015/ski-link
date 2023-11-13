

const hardcodedUser = {
    email: "john@gmail.com",
    password: "password", // Change before going live
  };
  
  exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
  
    // Need to access user and password in DB in live app
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      res.json({ message: "Logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  };
  
  const hardcodedInstructor = {
    email: "jane@gmail.com",
    password: "password", // Change before going live
  };
  
  exports.postInstructorLogin = async (req, res) => {
    const { email, password } = req.body;
  
    // Need to access user and password in DB in live app
    if (
      email === hardcodedInstructor.email &&
      password === hardcodedInstructor.password
    ) {
      res.json({ message: "Logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  };