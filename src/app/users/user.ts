
export class Address{
    street: string;
    suit: string;
    city: string;
    zipcode: string;
}
export class User{
    name: string;
    email: string;
    phone: string;
    address = new Address();
}