import { CartItem } from 'src/app/core/cart/cart-item';

export class Order {
    orderId ="";
    createdAt =Date.now;
    constructor(
        public userId: string,
        public orderTotal: string,
        public deliveryDate: Date,
        public shippingAddress: string,
        public itemList: CartItem[],
        public cartId: string,
        public paymentId: string,
        public shippingCost: number,
        public itemsCount: number,
        public estimatedTax: number,
        public orderSubTotal: number
    ){}
}