import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";

class HousesService {

  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)

    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
  }

  async createHouse(rawHouseData) {
    const response = await api.post('api/houses', rawHouseData)
    console.log('created car', response);

    const house = new House(response.data)
    AppState.houses.push(house)


  }

  async getHouses() {
    const response = await api.get('api/houses',)
    console.log("here is the response", response.data);

    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses

  }


}

export const housesService = new HousesService()