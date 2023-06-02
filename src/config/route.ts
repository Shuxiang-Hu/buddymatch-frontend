import Index from "../pages/Index.vue";
import Setting from "../pages/Setting.vue";
import Team from "../pages/Team.vue";
import Search from "../pages/Search.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/setting', component: Setting },
    { path: '/team', component: Team },
    { path: '/search', component: Search },
    { path: '/setting/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/user/login', component: UserLoginPage }
]

export default routes;