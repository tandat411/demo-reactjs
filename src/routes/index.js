import configs from "~/configs";

// Layouts
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
import Friends from "~/pages/Friends";
import Explore from "~/pages/Explore";

const publicRoutes = [
    {path: configs.routes.home, component: Home},
    {path: configs.routes.following, component: Following},
    {path: configs.routes.profile, component: Profile},
    {path: configs.routes.upload, component: Upload, layout: HeaderOnly},
    {path: configs.routes.search, component: Search, layout: null},
    {path: configs.routes.live, component: Live},
    {path: configs.routes.friends, component: Friends},
    {path: configs.routes.explore, component: Explore},
];
const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };
