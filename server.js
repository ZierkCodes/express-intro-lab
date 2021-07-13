// modules
import express from 'express';
import serveStatic from 'serve-static';
import * as usersDB from './models/users.mjs';
import path from 'path';

// express app
const app = express()

// Configuration
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')





// Routes
app.get('/', (req, res) => {
    res.redirect('/users')
})

app.get('/users', (req, res) => {
    usersDB.find({}, (error, users) => {
        res.render('users', {
            users: users,
            error: error
        })
    })
})

app.get('/users/:id', (req, res) => {
    usersDB.find({id: req.params.id}, (error, user) => {
        res.render('user', {
            user: user,
            error: error
        })
    })
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})