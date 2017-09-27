
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  makeUser: makeUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .where('users.id', id)
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .select()
    .first()
}

function makeUser (data, connection) {
  return connection('users')
    .insert({
      name: data.name,
      email: data.email
    }, 'id')
    .then(userId => {
      console.log(userId)
      return makeProfile(userId[0], data, connection)
    })
}

function makeProfile (id, data, connection) {
  return connection('profiles')
    .insert({
      url: data.url,
      profilePicture: data.profilePicture,
      user_id: id
    })
}
