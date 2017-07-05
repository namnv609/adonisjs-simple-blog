'use strict'

const Schema = use('Schema')

class CreatePostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string("title")
      table.string("description")
      table.text("content")
      table.integer("category_id")
      table.integer("user_id")
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists("posts")
  }

}

module.exports = CreatePostsTableSchema
