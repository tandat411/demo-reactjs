import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './AccountItem.module.scss';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from '~/assets/images';

const context = classNames.bind(styles);

function AccountItem({ children }) {
    return ( 
        <div className={context('wrapper')}>
            <img className={context('avatar')} src={images.user} alt="avatar" />
            <div className={context('info')}>
                <p className={context('name')}>
                    <span>Lê Văn Đạt</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />
                </p>
                <span className={context('username')}>lezandat</span>
            </div>
        </div>
    );
}

export default AccountItem;