"use strict"

const Category = use("App/Model/Category")
const Validator = use("Validator")

class CategoriesController {
  * index(request, response) {
    const categories = yield Category.query().orderBy("id", "desc").fetch()

    yield response.sendView("admins/categories/index", {
      categories: categories.toJSON()
    })
  }

  * getEdit(request, response) {
    const categoryId = request.param("id")
    const category = yield Category.findOrFail(categoryId)

    yield response.sendView("admins/categories/form", {
      category: category.toJSON()
    })
  }

  * getCreate(request, response) {
    const category = new Category()

    yield response.sendView("admins/categories/form", {
      category: category.toJSON()
    })
  }

  * postCreate(request, response) {
    const categoryData = request.only("name")
    const validation = yield Validator.validate(categoryData, Category.rules)

    if (validation.fails()) {
      yield request.with({
        errors: validation.messages()
      }).flash()

      return response.redirect("back")
    }

    yield Category.create(categoryData);


    return response.redirect("/admin/categories")
  }
}

module.exports = CategoriesController
