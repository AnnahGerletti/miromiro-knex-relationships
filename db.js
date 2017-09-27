
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
  return Promise.all([
    connection('users')
      .select(),

    connection('profiles')
      .select()

  ])
}
