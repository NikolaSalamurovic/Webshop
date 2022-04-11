export class OrderAPI{
    id!: number;
    companyId: number = 41;
    created!: Date;
    createdBy!: string;
    paymentMethod!: string;
    totalPrice!: number;
    status!: number;
    orderRows!: any []; 
}