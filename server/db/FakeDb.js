import { Burger } from "../models/Burger";

export const FakeDb = {
    burgers: [
        new Burger({
            name: 'Cheeseborger',
            price: 5.99
        }),
        new Burger({
            name: 'Crabby Patty',
            price: 12.99
        }),
    ]
}