import { reactive } from "vue";

interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

// Hàm lấy giỏ hàng từ localStorage
function getCartFromStorage(): Product[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

// Hàm lưu giỏ hàng vào localStorage
function saveCartToStorage(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartStore = reactive({
    cart: getCartFromStorage(),  // Khởi tạo giỏ hàng từ localStorage

    addToCart(product: Product): void {
        const existingProduct = this.cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        console.log(this.cart)
        saveCartToStorage(this.cart);  // Lưu giỏ hàng vào localStorage
    },

    getCart(): Product[] {
        return this.cart;  // Trả về giỏ hàng đã được reactive
    },

    clearCart(): void {
        this.cart = [];
        saveCartToStorage(this.cart);
    },

    removeFromCart(productId: number): void {
        this.cart = this.cart.filter(item => item.id !== productId);
        saveCartToStorage(this.cart);  // Lưu lại giỏ hàng vào localStorage sau khi xóa sản phẩm
    },

    updateQuantity(productId: number, quantity: number): void {
        const product = this.cart.find(item => item.id === productId);
        if (product) {
            product.quantity = quantity;
            saveCartToStorage(this.cart);  // Lưu giỏ hàng vào localStorage sau khi thay đổi số lượng
        }
    },
    get totalPrice(): number {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    get totalProduct(): number {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
});

export default cartStore;
