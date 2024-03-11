import { create } from "zustand";
import { BeansMenu, DataBack } from "../ts-files/MenuInterface";

interface State {
    addCoffe: (title:string, price: number, id: string) => void;
    sumTotal: () => number;
    sumQuantity: () => number;
    incrementItem: (id:string) => void;
    decrementItem: (id:string) => void;
    confirmAndSendOrder: () => void;
    storedOrders: BeansMenu[];
    storedETA: DataBack;

}

 export const useOrdersStore = create<State>((set) => ({
    storedOrders: [],
    storedETA: [],
    addCoffe: (title, price, id) => {
        set((state) => {
            const checkDuplicates = state.storedOrders?.findIndex(order => order.id === id);
            if(checkDuplicates !== -1){
                console.log("Duplicate!")
                const updateList = [...state.storedOrders];
                updateList[checkDuplicates!].quantity += 1
                return {storedOrders: updateList};
            }
           
           return {
               storedOrders: [
                    ...(state.storedOrders),
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
            state.storedOrders.forEach(order => {
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
            state.storedOrders.forEach(order => {
                totalQuantity += order.quantity;
            })
            return {...state, totalQuantity}
        })
        console.log("Total quantity in array", totalQuantity)
        return totalQuantity;
    },
    incrementItem: (id) => {
        set((state) => {
            const incrementOrder = state.storedOrders.map(order => {
                if(order.id === id){
                    
                   return {
                    ...order,
                    quantity: order.quantity + 1
                   }
                }
                return order
            })
            return {storedOrders: incrementOrder}
    })
},
    decrementItem: (id) => {
        set((state) => {
            const decrementOrder = state.storedOrders.map(order => {
                if(order.id === id) {
                    return {
                        ...order,
                        quantity: order.quantity - 1
                    }
                }
                return order
            })
            return {storedOrders: decrementOrder.filter((item) => item.quantity > 0)}
        })
    },
    confirmAndSendOrder: () => {
        set(async (state) => {
            const confirmedOrder = {
                details: {
                    "order": state.storedOrders.map((order) => ({
                            name: order.title,
                            price: order.price
                        }))
                }
            };

            console.log("confirmedOrder", confirmedOrder)

            try {
                    const sendOrder = await fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order", {
                        method: "post",
                        body: JSON.stringify(confirmedOrder),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });

                    set({storedOrders: []})

                    const dataRecived: DataBack = await sendOrder.json()
                    console.log("data back", dataRecived)
                    const {eta, orderNr} = dataRecived;
                    console.log("Eta", eta);
                    console.log("orderNr", orderNr)
                    set({storedETA: {eta, orderNr}})

            }catch(error){
                console.log("Error sending post", error)
            }
        })
        
    }

}));