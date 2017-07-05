'use strict'

const Schema = use('Schema')

class CreateUsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string("username").unique()
      table.string("email").unique()
      table.string("password")
      table.string("fullname", 50)
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists("users")
  }

}

module.exports = CreateUsersTableSchema
