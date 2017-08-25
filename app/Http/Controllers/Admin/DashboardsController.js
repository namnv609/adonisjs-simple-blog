"use strict"

class DashboardsController {
  * index(request, response) {
    yield response.sendView("admins/dashboards/index")
  }
}

module.exports = DashboardsController
