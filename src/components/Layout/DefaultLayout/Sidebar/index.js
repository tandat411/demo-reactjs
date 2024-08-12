import classNames from "classnames/bind";

import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import { ExploreActiveIcon, ExploreIcon, FollowingActiveIcon, FollowingIcon, FriendsActiveIcon, FriendsIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, ProfileIcon } from "~/components/Icons";
import configs from "~/configs";

const context = classNames.bind(styles);

const MENU = [
    {
        title: 'For You',
        to: configs.routes.home,
        icon: {
            normal: <HomeIcon />,
            active: <HomeActiveIcon />
        }
    },
    {
        title: 'Explore',
        to: configs.routes.explore,
        icon: {
            normal: <ExploreIcon />,
            active: <ExploreActiveIcon />
        }
    },
    {
        title: 'Following',
        to: configs.routes.following,
        icon: {
            normal: <FollowingIcon />,
            active: <FollowingActiveIcon />
        }
    },
    {
        title: 'Friends',
        to: configs.routes.friends,
        icon: {
            normal: <FriendsIcon />,
            active: <FriendsActiveIcon />
        }
    },
    {
        title: 'LIVE',
        to: configs.routes.live,
        icon: {
            normal: <LiveIcon />,
            active: <LiveActiveIcon />
        }
    },
    {
        title: 'Profile',
        to: configs.routes.profile,
        icon: {
            normal: <ProfileIcon />,
            active: <FriendsActiveIcon />
        }
    },
];

const renderMenuItem = () => {
    return MENU.map((item, index) => {
        return <MenuItem key={index} to={item.to} title={item.title} icon={item.icon} />
    });
};

function Sidebar() {
    return ( 
        <aside className={context('wrapper')}>
            <Menu>
                {renderMenuItem()}
            </Menu>
        </aside>
     );
}

export default Sidebar;