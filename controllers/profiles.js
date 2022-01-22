import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .populate('trips')
  .exec()
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { index }
