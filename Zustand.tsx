import create from 'zustand'

interface Mystore{
    cart:any[];
    addToCart:(item:any)=>void;
}
const useBearStore = create<Mystore>((set) => ({
  cart:[],
  addToCart:(item) => {
    set((state) => ({ cart: [...state.cart , item]}))
  },
}))
export default useBearStore;