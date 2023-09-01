import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue"
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Produk from "../views/Produk.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Contact from "../views/Contact.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Brand from "../views/Brand.vue"
import Category from "../views/Category.vue"
import Profile from "../views/Profile.vue"
import OrderPage from "../views/OrderPage.vue"
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
       
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requireGuest: true },

    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
        
    },
    {
        path: "/produk/:slug",
        name: "SingleProduct",
        component: SingleProduct,
    },
    { 
        path: "/contact",
        name: "Contact",
        component: Contact,
        
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requireLogin: true },
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requireLogin: true },
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
       
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
        
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { requireLogin: true },
    },
    {
        path: "/order/:orderCode",
        name: "OrderPage",
        component: OrderPage,
        props: true,
        meta: { requireLogin: true },
        
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }  
});
export default router;