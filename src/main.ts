import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, NavBar, Tabbar, TabbarItem} from 'vant';
import 'vant/lib/index.css';
import routes from "./config/route";
import * as VueRouter from "vue-router";
import { Search } from 'vant';
import { Cascader } from 'vant';
import { TreeSelect } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Form, Field} from 'vant';
import { Card } from 'vant';
import { Empty } from 'vant';
import { DatePicker } from 'vant';
import { Switch } from 'vant';
import { Dialog } from 'vant';
import {
    Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,
} from 'vant';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})







const app  = createApp(App);
app.use(DatePicker);
app.use(Dialog);
app.use(Cell);
app.use(CellGroup);
app.use(Button);
app.use(Empty);
app.use(Search);
app.use(NavBar);
app.use(Tabbar);
app.use(Search);
app.use(TabbarItem);
app.use(Cascader);
app.use(TreeSelect);
app.use(Form)
app.use(Field)
app.use(Switch);
app.use(Card);
app.use(router);
app.use(Skeleton);
app.use(SkeletonTitle);
app.use(SkeletonImage);
app.use(SkeletonAvatar);
app.use(SkeletonParagraph);
app.mount('#app');





