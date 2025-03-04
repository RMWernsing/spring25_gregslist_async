import { Identity } from './Auth/Identity.js'
import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  // NOTE the logged in user
  /** @type {Identity} */
  identity = null
  /** @type {Car[]} */
  cars = []

  /**
   * @type {House[]}
   */
  houses = []
}

export const AppState = createObservableProxy(new ObservableAppState())