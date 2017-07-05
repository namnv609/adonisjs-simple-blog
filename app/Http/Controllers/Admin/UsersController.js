class UsersController {
  * login(request, response) {
    yield response.sendView("admins/users/login")
  }
}

module.exports = UsersController
