const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bcrypt= require('bcryptjs')
const db ='mongodb+srv://hackathon:online@cluster0.wkx7c.mongodb.net/User?retryWrites=true&w=majority'
const User = require('./models/User')
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    useCreateIndex: true

})
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));

app.post('/signup', async (req, res) => {
    console.log(req.body)
    bcrypt.genSalt(10, function (err, Salt) {   
        console.log(req.body)
        bcrypt.hash(req.body.password, Salt, function (err, hash) {
            var user = new User({   
                username: req.body.username,
                email: req.body.email,
                occupation: req.body.occupation,
                age:req.body.age,
                password: hash
            })

            user.save().then(() => { 
                console.log(user)
            })
        })
    })


res.redirect('/')

})



app.post('/login', (req, res) => {
    User.findOne({ "username": req.body.username}, async (err, user) => {
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (isMatch) {
                console.log(user)
                console.log(req.body)
            }
        })



    })




    res.redirect('/')
})



















app.listen(3001, () => {
    console.log('Server listening at port 3001')
})