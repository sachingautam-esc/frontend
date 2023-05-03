const userData = require('../../Constants/data/user')

const getUsers = (req, res) => {
    const data = userData.data;
    console.log('data', data)
    return data;
}

const createUser = (body) => {
    try {
        const { userObj } = body
        const savedUser = db.saveUser(userObj)
        return savesUser
    } catch (error) {
        // error handling //
        console.error(error)
        return {error,data:null}
    }   
}

const updateUser = (body) => {
    try {
        const { userId, name, lastName } = body
        const user = db.findUserById(userId)
        const updatedUser = db.updateUser(updatedUser)
        return updatedUser
    } catch (error) {
        // error handling //
        console.error(error)
        return {error,data:null}
    }   
}

const deleteUser = (body) => {
    try {
        const { userId } = body
        const user = db.findUserById(userId)
        const response = db.deleteUser(user)
        return response
    } catch (error) {
        // error handling //
        console.error(error)
        return {error,data:null}
    }   
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}