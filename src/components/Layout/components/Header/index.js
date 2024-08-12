/* eslint-disable no-sparse-arrays */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { InboxIcon, MessagesIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import configs from "~/configs";

const context = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    code: 'fr',
                    title: 'France'
                },
                ,
                {
                    code: 'es',
                    title: 'Spain'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
];

function Header() {
    // Handle logic menu
    const handleMenuChange = (menuItem) => {

    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ];

    return <header className={context('wrapper')}>
        <div className={context('inner')}>
            <div className={context('logo')}>
                <Link to={configs.routes.home} className={context('logo-link')} >
                    <img src={images.logo} alt='tiktok' />
                </Link>
            </div>
            <Search />

            <div className={context('action')}>
                {/* Check user login */}
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                            <button className={context('upload-btn')}>
                                <UploadIcon width='1.6rem' height='1.6rem' />
                                <span>Upload</span>
                            </button>
                        </Tippy>

                        <Tippy content='Messages' placement='bottom'>
                            <a href='/messages' className={context('action-link')}>
                                <MessagesIcon width='2.4rem' height='2.4rem' />
                            </a>
                        </Tippy>

                        <Tippy content='Inbox' placement='bottom'>
                            <a href='/inbox' className={context('action-link')}>
                                <InboxIcon />
                            </a>
                        </Tippy>
                        
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <Image 
                                src={images.user} 
                                className={context('user-avatar')} 
                                alt='avatar' 
                            />
                        </Menu>
                    </>
                ) : (
                    <>
                        {/* <Button text className={context('custom-login')}>Upload</Button> */}
                        <Button primary disable leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Login
                        </Button>
                        <Button outline >Register</Button>
                        {/* <Button rounded >Rounded button</Button> */}
                        {/* Dùng React router-dom để xử lý link nội bộ ở prop to */}
                        {/* <Button to="/login" target="_blank">Login</Button> */}
                        {/* Dùng prop href để xử lý link tuyệt đối ở thẻ a */}
                        {/* <Button href="https://www.google.com.vn/" target="_blank">Login</Button> */}
        
        
                        {/* <Button outline size="small" >Follow</Button> */}
                        {/* <Button outline size="large" >Large button</Button> */}
        
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={context('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </>
                )}
            </div>

            
        </div>
    </header>;
}

export default Header;