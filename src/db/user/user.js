// db functions //
const saveUser = ()=>{
    // do db opertion of saving the user// 
    const obj = {
            firstName: "sachin",
            lastName: "gautam",
            email: "sachingautam36@gmail.com",
            contactNo: "9512345670",
            id: 1
    }
    return obj
}

const findUserById = (id) =>{
    // db operation 
    let find = true
    let user = {}
    if(find){
        user = {
            firstName: "sachin",
            lastName: "gautam",
            email: "sachingautam36@gmail.com",
            contactNo: "9512345670",
            id: 1
    }
    }
    return user
}

module.exports = {
    saveUser,
    findUserById
}