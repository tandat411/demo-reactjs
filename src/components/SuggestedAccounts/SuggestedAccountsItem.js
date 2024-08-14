import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from "./SuggestedAccounts.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SuggestedAccountsPreview from "./SuggestedAccountsPreview/SuggestedAccountsPreview";

const context = classNames.bind(styles);

function SuggestedAccountsItem({ data = {} }) {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper className={context('menu-popper')}>
                    <div className={context('preview')}>
                        <SuggestedAccountsPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-40, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <Link to={`/@${data.nickname}`} className={context('suggested-account-item')}>
                    <Image 
                        className={context('avatar')} 
                        // src={images.user} 
                        src={data.avatar | images.user}
                        alt={data.full_name} 
                    />
                    
                    <div className={context('info')}>
                        <p className={context('name')}>
                            <span>{data.full_name || 'Mai Lâm Tấn Đạt'}</span>
                            {/* {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />} */}
                            {<FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />}
                        </p>
                        <span className={context('username')}>{data.nickname || 'mlt.dat'}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

SuggestedAccountsItem.propTypes = {

};

export default SuggestedAccountsItem;