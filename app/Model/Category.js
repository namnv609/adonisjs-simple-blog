'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  posts() {
    return this.hasMany("App/Model/Post")
  }
}

module.exports = Category
