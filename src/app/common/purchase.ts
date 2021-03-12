import { OrderItem } from './order-item';
import { Address } from './address';
import { Order } from './order';
import { Customer } from './customer';
export class Purchase {
    customer: Customer
    order: Order
    shippingAddress: Address
    billingAddress: Address
    orderItems: OrderItem[]

}
