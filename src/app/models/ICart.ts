import { CartProduct } from "./ICartProduct";

export class Cart{
    companyId: number = 4545;
    items: CartProduct [] = [];

    get priceSum(): number{
        let priceSum = 0;
        this.items.forEach(item => {
            priceSum += item.price;
        });

        return priceSum;
    }
}