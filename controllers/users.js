import { User } from "../models/user"; 

function index(req, res) {
    User.find({})
    .then(users => res.json(users))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }
  
  export { index }