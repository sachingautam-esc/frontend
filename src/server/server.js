// imports
const  app = require('express')();
const {moviesList} = require('../service/Movies/movieService')
const {getUsers, updateUser, deleteUser} = require('../service/User/userService')


// routes //

// this is for cors //
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

// health monitoring //
app.get('/health', (req,res)=>{
    res.send('server is running ok ')
})

// Get movies List //
app.get('/movies/list',(req,res)=>{
    const moviesData = moviesList();
    res.send({moviesData})
} )

// user routes start //
app.get('/user/list',(req,res)=>{
    const userData = getUsers();
    res.send({userData})
} )

// add a user
app.post('/user/new',(req,res)=>{
    const {body} = req;
    // add a req. body validator lie joi //
    const updatedUser = createUser(body)
    res.send({updatedUser})
} )

// update a user
app.put('/user/update',(req,res)=>{
    const {body} = req;
    // add a req. body validator //
    const updatedUser = updateUser(body)
    res.send({updatedUser})
} )

// delete a user
app.delete('/user/delete',(req,res)=>{
    const {body} = req;
    // add a req. body validator //
    const updatedUser = deleteUser(body)
    res.send({updatedUser})
} )
// user routes ends

//server creation
app.listen(8080,(req,res)=>{
    console.log('server is running')
})