'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  static boot() {
    super.boot()

    this.addHook("beforeCreate", "User.encryptPassword")
  }

  posts() {
    return this.hasMany("App/Model/Post")
  }

  comments() {
    return this.hasMany("App/Model/Comment")
  }
}

module.exports = User
