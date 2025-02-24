import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home-2",
      name: "home_2",
      component: () => import("../views/Home2View.vue"),
    },
    {
      path: "/home-3",
      name: "home_3",
      component: () => import("../views/Home3View.vue"),
    },
    {
      path: "/about-us",
      name: "about",
      component: () => import("../views/AboutUsView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/team-detail",
      name: "team_details",
      component: () => import("../views/TeamDetailsView.vue"),
    },
    {
      path: "/testimonial",
      name: "testimonial",
      component: () => import("../views/TestimonialView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/service-detail",
      name: "service_detail",
      component: () => import("../views/ServiceDetailView.vue"),
    },
    {
      path: "/error-404",
      name: "error_404",
      component: () => import("../views/Error404View.vue"),
    },
    {
      path: "/coming-soon",
      name: "coming_soon",
      component: () => import("../views/ComingSoonView.vue"),
    },
    {
      path: "/under-maintenance",
      name: "under_maintenance",
      component: () => import("../views/UnderMaintenanceView.vue"),
    },
    {
      path: "/our-menu-1",
      name: "menu_1",
      component: () => import("../views/Menu1View.vue"),
    },
    {
      path: "/our-menu-2",
      name: "menu_2",
      component: () => import("../views/Menu2View.vue"),
    },
    {
      path: "/our-menu-3",
      name: "menu_3",
      component: () => import("../views/Menu3View.vue"),
    },
    {
      path: "/our-menu-4",
      name: "menu_4",
      component: () => import("../views/Menu4View.vue"),
    },
    {
      path: "/our-menu-5",
      name: "menu_5",
      component: () => import("../views/Menu5View.vue"),
    },
    {
      path: "/shop-style-1",
      name: "shop_style_1",
      component: () => import("../views/ShopStyle1View.vue"),
    },
    {
      path: "/shop-style-2",
      name: "shop_style_2",
      component: () => import("../views/ShopStyle2View.vue"),
    },
    {
      path: "/shop-cart",
      name: "shop_cart",
      component: () => import("../views/ShopCartView.vue"),
    },
    {
      path: "/shop-wishlist",
      name: "shop_wishlist",
      component: () => import("../views/ShopWishListView.vue"),
    },
    {
      path: "/shop-checkout",
      name: "shop_checkout",
      component: () => import("../views/ShopCheckOutView.vue"),
    },
    {
      path: "/product-detail",
      name: "product_detail",
      component: () => import("../views/ProductDetailsView.vue"),
    },
    {
      path: "/blog-grid-2",
      name: "blog_grid_2",
      component: () => import("../views/BlogGrid2View.vue"),
    },
    {
      path: "/blog-grid-3",
      name: "blog_grid_3",
      component: () => import("../views/BlogGrid3View.vue"),
    },
    {
      path: "/blog-grid-left-sidebar",
      name: "blog_grid_left_sidebar",
      component: () => import("../views/BlogGridLeftSidebarView.vue"),
    },
    {
      path: "/blog-grid-right-sidebar",
      name: "blog_grid_right_sidebar",
      component: () => import("../views/BlogGridRightSidebarView.vue"),
    },
    {
      path: "/blog-list",
      name: "blog_list",
      component: () => import("../views/BlogListView.vue"),
    },
    {
      path: "/blog-list-left-sidebar",
      name: "blog_list_left_sidebar",
      component: () => import("../views/BlogListLeftSidebarView.vue"),
    },
    {
      path: "/blog-list-right-sidebar",
      name: "blog_list_right_sidebar",
      component: () => import("../views/BlogListRightSidebarView.vue"),
    },
    {
      path: "/blog-both-sidebar",
      name: "blog_both_sidebar",
      component: () => import("../views/BlogBothSidebarView.vue"),
    },
    {
      path: "/blog-standard",
      name: "blog_standard",
      component: () => import("../views/BlogStandardView.vue"),
    },
    {
      path: "/blog-open-gutenberg",
      name: "blog_open_gutenberg",
      component: () => import("../views/BlogOpenGutenburgView.vue"),
    },
    {
      path: "/blog-detail-left-sidebar",
      name: "blog_detail_left_sidebar",
      component: () => import("../views/BlogDetailLeftSidebarView.vue"),
    },
    {
      path: "/blog-detail-right-sidebar",
      name: "blog_detail_right_sidebar",
      component: () => import("../views/BlogDetailRightSidebarView.vue"),
    },
    {
      path: "/blog-grid-3-masonary",
      name: "blog_grid_3_masonary",
      component: () => import("../views/BlogGrid3MasonaryView.vue"),
    },
    {
      path: "/blog-grid-4-masonary",
      name: "blog_grid_4_masonary",
      component: () => import("../views/BlogGrid4MasonaryView.vue"),
    },
    {
      path: "/blog-wide-list-sidebar",
      name: "blog_wide_list_sidebar",
      component: () => import("../views/BlogWideListSidebarView.vue"),
    },
    {
      path: "/blog-wide-grid-sidebar",
      name: "blog_wide_grid_sidebar",
      component: () => import("../views/BlogWideGridSidebarView.vue"),
    },
    {
      path: "/contact-us",
      name: "contact_us",
      component: () => import("../views/ContactUsView.vue"),
    },
  ],
});

export default router;
