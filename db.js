
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

function makeUser (connection) {
  const viewData = {}
  return connection('users')
    .select()
    .then(users => {
      viewData.users = users
      return connection('profiles')
        .select()
        .then(profiles => {
          viewData.profiles = profiles
          return viewData
        })
    })
}
