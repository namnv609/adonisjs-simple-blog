class UsersController {
  * getLogin(request, response) {
    yield response.sendView("admins/users/login")
  }

  * postLogin(request, response) {
    const username = request.input("username")
    const password = request.input("password")

    try {
      yield request.auth.attempt(username, password)

      response.redirect("/admin/")
    } catch (exception) {
      yield request.with({
        error: "Username or password is invalid",
        username: username
      }).flash()

      response.redirect("back")
    }
  }

  * logout(request, response) {
    yield request.auth.logout()

    response.redirect("/admin/login")
  }
}

module.exports = UsersController
