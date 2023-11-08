
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/lessons';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database using Mongoose');
})
.catch(err => {
    console.log('Error connecting to the database:', err);
});


const Schema = mongoose.Schema; 

const lessonSchema = new Schema({
    name: { 
        type: String,
        required: true 
        }, 
    resort: { 
        type: String,
        enum: ['Arapahoe', 'Aspen', 'Breckenridge', 'Keystone', 'Vail'], 
        required: true 
        },  
    lesson: { 
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'], 
        required: true 
        }, 
    date: Date, 
    status: { 
        type: String,
        default: 'PENDING'
        } 
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

