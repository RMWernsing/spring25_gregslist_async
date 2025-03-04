import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
      console.log('Here are the houses in the appstate', AppState.houses);

    } catch (error) {
      console.error('COULD NOT GET HOUSES', error);
      Pop.error(error, 'Could not get houses')
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCard)
    const houseCardElem = document.getElementById('houseCard')
    houseCardElem.innerHTML = content
  }
}