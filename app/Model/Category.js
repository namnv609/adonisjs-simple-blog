'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  posts() {
    return this.hasMany("App/Model/Post")
  }

  static get dateFormat() {
    return "YYYY/MM/DD HH:mm:ss"
  }

  static get rules() {
    return {
      name: "required",
    }
  }
}

module.exports = Category
