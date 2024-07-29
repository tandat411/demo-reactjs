import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const context = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return <header className={context('wrapper')}>
        <div className={context('inner')}>
            <div className={context('logo')}>
                <img src={images.logo} alt='tiktok' />
            </div>
            <Tippy 
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={context('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={context('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )} 
            >
                <div className={context('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    
                    <button className={context('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={context('loading')} icon={faSpinner} />

                    <button className={context('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={context('action')}>
                <Button text className={context('custom-login')}>Upload</Button>
                <Button primary disable leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                    Login
                </Button>
                <Button outline >Register</Button>
                <Button rounded >Rounded button</Button>
                {/* Dùng React router-dom để xử lý link nội bộ ở prop to */}
                {/* <Button to="/login" target="_blank">Login</Button> */}
                {/* Dùng prop href để xử lý link tuyệt đối ở thẻ a */}
                {/* <Button href="https://www.google.com.vn/" target="_blank">Login</Button> */}
                
                
                {/* <Button outline size="small" >Follow</Button> */}
                {/* <Button outline size="large" >Large button</Button> */}
            </div>
            
        </div>
    </header>;
}

export default Header;