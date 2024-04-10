// // Inside the index.js file
// import express from 'express';
// import { connect, Schema, model } from 'mongoose';
// import { json } from 'body-parser';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(json());

// connect('your_mongodb_uri', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// const userSchema = new Schema({
//     email: { type: String, required: true },
//     password: { type: String, required: true }
// });

// const User = model('User', userSchema);

// // Signup route
// app.post('/signup', (req, res) => {
//     const { email, password } = req.body;

//     // Check if user exists
//     User.findOne({ email })
//         .then(user => {
//             if (user) {
//                 // User already exists
//                 res.status(400).json({ error: 'User already exists' });
//             } else {
//                 // Create new user
//                 const newUser = new User({ email, password });
//                 newUser.save()
//                     .then(() => res.json({ message: 'Signup successful' }))
//                     .catch(err => res.status(500).json({ error: 'Error creating user' }));
//             }
//         })
//         .catch(err => res.status(500).json({ error: 'Error finding user' }));
// });

// // Login route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // Check if user exists
//     User.findOne({ email })
//         .then(user => {
//             if (!user) {
//                 // User does not exist
//                 res.status(404).json({ error: 'User not found' });
//             } else {
//                 // Check password
//                 if (user.password !== password) {
//                     // Incorrect password
//                     res.status(401).json({ error: 'Incorrect password' });
//                 } else {
//                     // Login successful
//                     res.json({ message: 'Login successful' });
//                 }
//             }
//         })
//         .catch(err => res.status(500).json({ error: 'Error finding user' }));
// });

// const port = 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));n