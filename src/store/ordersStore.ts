import { create } from "zustand";
import { BeansMenu } from "../ts-files/MenuInterface";

interface State {
    addCoffe: (title:string, price: number, id: string) => void;
    sumTotal: () => number;
    sumQuantity: () => number;
    incrementItem: (id: string) => void;
    decrementItem: (id: string) => void;
    storedOrders?: BeansMenu[];
}


 export const useOrdersStore = create<State>((set) => ({
    storedOrders: [],
    addCoffe: (title, price, id) => {
        set((state) => {
            const checkDuplicates = state.storedOrders?.findIndex(order => order.id === id);
            if(checkDuplicates !== -1){
                console.log("Duplicate!")
                const updateList = [...state.storedOrders || []];
                updateList[checkDuplicates!].quantity += 1
                return {storedOrders: updateList};
            }
           
           return {
               storedOrders: [
                    ...(state.storedOrders || []),
                    {
                        id: id,
                        title: title,
                        price: price,
                        quantity: 1,
    
                    },
                ],
           } 
        });
    },
    sumTotal: ():number => {
        let total = 0;
        set((state) => {
            state.storedOrders?.forEach(order => {
                 total += order.price * order.quantity
            });
            return {...state, total};
        });
        console.log("total", total)
        return total;
    },
    sumQuantity: ():number => {
        let totalQuantity = 0;
        set((state) => {
            state.storedOrders?.forEach(order => {
                totalQuantity += order.quantity;
            })
            return {...state, totalQuantity}
        })
        console.log("Total quantity in array", totalQuantity)
        return totalQuantity;
    },
    incrementItem: (id) => {
        set((state) => {
            const checkDuplicates = state.storedOrders?.findIndex(order => order.id === id);
            if(checkDuplicates !== -1){
                console.log("Duplicate!")
                const updateList = [...state.storedOrders || []];
                updateList[checkDuplicates!].quantity += 1
                return {storedOrders: updateList};
            }});
        
    },
    decrementItem: (id) => {
        set((state) => {
            const checkDuplicates = state.storedOrders?.findIndex(order => order.id === id);
            if(checkDuplicates !== -1){
                console.log("Duplicate!")
                const updateList = [...state.storedOrders || []];
                updateList[checkDuplicates!].quantity -= 1
                return {storedOrders: updateList};
            }});
    }
}));