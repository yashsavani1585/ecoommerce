import { createSlice } from '@reduxjs/toolkit';

// Fetch initial state from localStorage with a fallback to an empty array
const initialState = (() => {
    const cart = localStorage.getItem('cart');
    try {
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error("Failed to parse cart from localStorage:", e);
        return [];
    }
})();

console.log('Initial Cart State:', initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // Add item to cart
            state.push(action.payload);
            // Optional: Update localStorage whenever the cart changes
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action) {
            const updatedState = state.filter(item => item.id !== action.payload.id);
            // Update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        incrementQuantity(state, action) {
            const updatedState = state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
            // Update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        decrementQuantity(state, action) {
            const updatedState = state.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity--;
                }
                return item;
            });
            // Update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
