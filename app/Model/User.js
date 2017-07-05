'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  posts() {
    return this.hasMany("App/Model/Post")
  }

  comments() {
    return this.hasMany("App/Model/Comment")
  }
}

module.exports = User
