import { create } from "zustand";
import { BeansMenu } from "../ts-files/MenuInterface";

interface State {
    addCoffe?: (title:string, price: number, id: string) => void;
    storedOrders?: BeansMenu[];
}


 export const useOrdersStore = create<State>((set) => ({
    storedOrders:  [],
    addCoffe: (title, price, id) => {
        set((state) => ({
            storedOrders: [
                ...(state.storedOrders ||[]),
                {
                    id: id,
                    title: title,
                    price: price

                },
            ],
        }));
    },
} as State))