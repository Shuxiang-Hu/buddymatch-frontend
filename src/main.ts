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
import axios from "axios";
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


const app  = createApp(App);
app.use(Cell);
app.use(CellGroup);
app.use(Button);
app.use(Empty);
app.use(NavBar);
app.use(Tabbar);
app.use(Search);
app.use(TabbarItem);
app.use(Cascader);
app.use(TreeSelect);
app.use(Form)
app.use(Field)
app.use(Card);
app.use(router);
app.mount('#app');





