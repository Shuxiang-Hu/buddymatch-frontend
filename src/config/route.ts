import Index from "../pages/Index.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import Team from "../pages/Team.vue";
import Search from "../pages/Search.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
    { path: '/', title: '主页', component: Index },
    { path: '/user', title: '个人',component: UserPage },
    { path: '/team', title: '队伍',component: Team },
    { path: '/search', title: '搜索用户',component: Search },
    { path: '/user/edit', title: '用户编辑',component: UserEditPage },
    { path: '/user/update', title: '用户信息',component: UserUpdatePage },
    { path: '/user/list', title: '搜索结果',component: SearchResultPage },
    { path: '/user/login', title: '登录',component: UserLoginPage },
    { path: '/team/add', title: '创建队伍',component: TeamAddPage },
    { path: '/team/update', title: '更新队伍信息',component: TeamUpdatePage },
    { path: '/user/team/create',title: '创建的队伍', component: UserTeamCreatePage },
    { path: '/user/team/join', title: '加入的队伍',component: UserTeamJoinPage }
]

export default routes;