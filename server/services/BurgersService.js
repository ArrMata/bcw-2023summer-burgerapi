import { FakeDb } from "../db/FakeDb"
import { Burger } from "../models/Burger"
import { BadRequest } from "../utils/Errors"

const _checkKeys = (keys, obj) => {
    for (let index = 0; index < keys.length; index++) {
        if (!(keys[index] in obj))
            return false
    }
    return true
}

class BurgersService {
    getBurgers() {
        return FakeDb.burgers
    }

    getBurgerById(burgerId) {
        const foundBurger = FakeDb.burgers.find(burger => burger.id == burgerId)
        if (!foundBurger)
            throw new BadRequest(`${burgerId} is not a valid id.`)
        return foundBurger
    }

    createBurger(burgerData) {
        let keys = ['name', 'price']
        let validData = _checkKeys(keys, burgerData)
        if (!validData)
            throw new BadRequest(`Missing one of the following keys in your body: ${keys}`)
        let newBurger = new Burger(burgerData)
        FakeDb.burgers.push(newBurger)
        return newBurger
    }

    deleteBurger(burgerId) {
        const foundBurger = this.getBurgerById(burgerId)
        FakeDb.burgers = FakeDb.burgers.filter(burger => burger.id != burgerId)
        return foundBurger
    }

    updateBurger(burgerId, burgerData) {
        const foundBurger = this.getBurgerById(burgerId)
        foundBurger.name = burgerData.name || foundBurger.name
        foundBurger.price = burgerData.price || foundBurger.price
        return foundBurger
    }
}

export const burgersService = new BurgersService()