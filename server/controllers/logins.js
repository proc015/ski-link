const { User } = require('./../models/model')

const hardcodedUser = {
  email: "john@gmail.com",
  password: "password", // Change before going live
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email }).exec();

    if (user) {
      // Ahora puedes comparar la contraseña usando bcrypt
      //const passwordMatch = await bcrypt.compare(password, user.password);

      const passwordMatch = true

      if (passwordMatch) {
        console.log('Contraseña válida. Usuario encontrado:', user);
        res.status(200).json({ message: 'Login successfully' });
      } else {
        console.log('Contraseña incorrecta');
        res.status(401).json({ message: 'Incorrect credentials' });
      }
    } else {
      console.log('Usuario no encontrado');
      res.status(401).json({ message: 'Incorrect credentials' });
    }
  } catch (error) {
    console.error('Error al buscar usuario por email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    // hash password

    const user = await User.create({
      name,
      email,
      password: password // cambiar por hashed password
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email
      });
    } else {
      res.status(400).json({ message: 'incorrect user data' })
    }
  } catch (error) {
    console.error('Error user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }


}


// if (email === hardcodedUser.email && password === hardcodedUser.password) {
//   res.json({ message: "Logged in successfully" });
// } else {
//   res.status(401).json({ message: "Invalid credentials" });
// }

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