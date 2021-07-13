export {
    find
}

const usersCollection = [
  {
    _id: 10001,
    first: 'Kristina',
    last: 'Smith',
    email: 'KristinaTSmith@dayrep.com',
    password: 'vaeJigh1tai',
    date_created: new Date()
  },
  {
    _id: 10002,
    first: 'Loretta',
    last: 'Fair',
    email: 'LorettaTFair@dayrep.com',
    password: 'eb4Ourae',
    date_created: new Date()
  },
  {
    _id: 10003,
    first: 'Fred',
    last: 'Byrd',
    email: 'FredJByrd@armyspy.com',
    password: 'Too8eeh6ah',
    date_created: new Date()
  },
  {
    _id: 10004,
    first: 'Judith',
    last: 'Golden',
    email: 'JudithBGolden@jourrapide.com',
    password: 'shooM6sie',
    date_created: new Date()
  },
  {
    _id: 10005,
    first: 'Gayle',
    last: 'Bryant',
    email: 'GayleLBryant@jourrapide.com',
    password: 'cahVoMe7ahQu',
    date_created: new Date()
  }
]
let userIdCount = 10006;


const find = (conditions, callback) => {
    // see if this works, if not, execute the code in the catch block
    try {
      // make sure that conditions is an object - if not throw a TypeError
      if (!(conditions instanceof Object)){
        throw new TypeError('Please pass in an object')
      }
      // If the object is empty, return all the todos
      if (Object.keys(conditions).length === 0) return callback(null, usersCollection) 
      else if (Object.keys(conditions).length > 0) {
        let userId = parseInt(conditions.id)
        let user = usersCollection.find(user => user._id === userId)
        console.log(usersCollection[4]._id)
        console.log(userId)
        if(!user) {
          throw new Error('User does not exist')
        } 
        return callback(null, user)
      }
      // deal with errors
    } catch (error) {
      console.log(error)
      callback(error, [])
    }
  }

console.log()

