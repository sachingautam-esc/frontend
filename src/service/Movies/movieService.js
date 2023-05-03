const fs = require('fs')
const moviesData = require('../../Constants/data/movies')

const moviesList = ()=>{
    return moviesData.data
}

module.exports = {
    moviesList
}