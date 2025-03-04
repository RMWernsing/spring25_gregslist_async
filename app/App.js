import { AuthController } from "./Auth/AuthController.js"
import { CarsController } from "./controllers/CarsController.js"
import { HousesController } from "./controllers/HousesController.js"

class App {
  // NOTE you must name the property here on the App class as 'authController' or our auth stuff will not work
  authController = new AuthController()
  carsController = new CarsController()
  housesController = new HousesController()
}

window['app'] = new App()


