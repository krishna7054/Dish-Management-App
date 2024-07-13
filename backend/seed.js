// seed.js
const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const dishes = [
  
    {
        "dishName": "Jeera Rice",
        "dishId": "1",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        "isPublished": true
        },
        {
        "dishName": "Paneer Tikka",
        "dishId": "2",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
        "isPublished": true
        },
        {
        "dishName": "Rabdi",
        "dishId": "3",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
        "isPublished": true
        },
        {
        "dishName": "Chicken Biryani",
        "dishId": "4",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
        "isPublished": true
        },
        {
        "dishName": "Alfredo Pasta",
        "dishId": "5",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
        "isPublished": true
        }
        
        
];

const seedDatabase = async () => {
  await mongoose.connect('mongodb+srv://21it3038:WDHbRTNejWX1uisv@cluster0.b8vudo6.mongodb.net/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Dish.deleteMany({});
  await Dish.insertMany(dishes);
  console.log('Database seeded!');
  mongoose.disconnect();
};

seedDatabase();
