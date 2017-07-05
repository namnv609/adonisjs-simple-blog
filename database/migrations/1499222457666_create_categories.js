'use strict'

const Schema = use('Schema')

class CreateCategoriesTableSchema extends Schema {

  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string("name")
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists("categories")
  }

}

module.exports = CreateCategoriesTableSchema
