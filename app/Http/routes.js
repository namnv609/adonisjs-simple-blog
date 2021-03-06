'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group("adminLogin", function() {
  Route.get("/login", "Admin/UsersController.getLogin")
  Route.post("/login", "Admin/UsersController.postLogin")
}).prefix("admin")

Route.group("admin", function() {
  Route.get("/", "Admin/DashboardsController.index")
  Route.get("/logout", "Admin/UsersController.logout").as("adminLogout")
}).prefix("admin").middleware("admin")
