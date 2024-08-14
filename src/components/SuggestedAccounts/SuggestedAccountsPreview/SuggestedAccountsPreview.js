import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from "./SuggestedAccountsPreview.module.scss";
import Image from "~/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import Button from "~/components/Button";

const context = classNames.bind(styles);

function SuggestedAccountsPreview({ data = {} }) {
    return (
        <div className={context('wrapper')}>
            <header className={context('header')}>
                <Image 
                    className={context('avatar')} 
                    // src={images.user} 
                    src={data.avatar | images.user}
                    alt={data.full_name} 
                />
                <Button primary size="small">Follow</Button>
            </header>
            
            <div className={context('body')}>
                <p className={context('name')}>
                    <span>{data.nickname || 'mlt.dat'}</span>
                    {/* {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />} */}
                    {<FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />}
                </p>
                <span className={context('username')}>{data.full_name || 'Mai Lâm Tấn Đạt'}</span>
                <p className={context('analytics')}>
                    <strong className={context('value')}>
                        8.2M {' '}
                    </strong>
                    <span className={context('label')} >
                        Followers
                    </span>
                    <strong className={context('value')}>
                        10.5M {' '}
                    </strong>
                    <span className={context('label')} >
                        Likes
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SuggestedAccountsPreview;