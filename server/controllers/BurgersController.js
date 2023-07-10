import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { BadRequest } from "../utils/Errors";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:id', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:id', this.deleteBurger)
            .put('/:id', this.updateBurger)
    }

    getBurgers(req, res, next) {
        try {
            res.send(burgersService.getBurgers())
        } catch (error) {
            next(error)
        }
    }

    getBurgerById(req, res, next) {
        try {
            const itemId = req.params.id
            res.send(burgersService.getBurgerById(itemId))
        } catch (error) {
            next(error)
        }
    }

    createBurger(req, res, next) {
        try {
            const burgerData = req.body
            res.send(burgersService.createBurger(burgerData))
        } catch (error) {
            next(error)
        }
    }

    deleteBurger(req, res, next) {
        try {
            const burgerId = req.params.id
            res.send(burgersService.deleteBurger(burgerId))
        } catch (error) {
            next(error)
        }
    }

    updateBurger(req, res, next) {
        try {
            const burgerId = req.params.id
            const burgerData = req.body
            res.send(burgersService.updateBurger(burgerId, burgerData))
        } catch (error) {
            next(error)
        }
    }
}