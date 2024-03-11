export interface BeansMenu {
    id:string;
    title:string;
    desc?: string;
    price: number;
    quantity: number;
}

export interface DataBack {
    eta?: number,
    orderNr?: string,
}