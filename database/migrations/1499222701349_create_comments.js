'use strict'

const Schema = use('Schema')

class CreateCommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.text("content")
      table.integer("post_id")
      table.integer("user_id")
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists("comments")
  }

}

module.exports = CreateCommentsTableSchema
