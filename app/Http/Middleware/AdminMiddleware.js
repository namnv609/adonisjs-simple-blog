"use strict"

class AdminMiddleware {
  * handle(request, response, next) {
    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
      response.redirect("/admin/login")
    }

    yield next
  }
}

module.exports = AdminMiddleware
