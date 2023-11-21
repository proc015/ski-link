const { User } = require('./../models/model')
const bcrypt = require('bcrypt');


exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email }).exec();

    if (user) {

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) return res.status(400).json({ message: "User or Password not found" });

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successfully' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(401).json({ message: 'User already exists' });
    } else {
      const passwordHashed = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        password: passwordHashed
      });

      if (user) {
        res.status(201).json({
          message: 'User registered',
          _id: user._id,
          name: user.name,
          email: user.email
        });
      } else {
        res.status(400).json({ message: 'Invalid user data' })
      }
    }


  } catch (error) {
    console.error('Error user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}

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