import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCard)
    const houseCardElem = document.getElementById('houseCard')
    houseCardElem.innerHTML = content
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

  async createHouseListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawHouseData = getFormData(formElem)
      console.log('here is your new house', rawHouseData);
      await housesService.createHouse(rawHouseData)

    } catch (error) {
      console.error('COULD NOT CREATE HOUSES', error);
      Pop.error(error, 'Could not create houses')
    }
  }

  async deleteHouseListing(houseId) {
    try {
      const confirmed = Pop.confirm('Are you sure you want to delete this house listing?', 'If you do it will be gone forever', 'yes', 'no')
      if (!confirmed) {
        return
      }
      await housesService.deleteHouse(houseId)

    } catch (error) {
      console.error('COULD NOT DELETE HOUSES', error);
      Pop.error(error, 'Could not delete House')
    }
  }
}