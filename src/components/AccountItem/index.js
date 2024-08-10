import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from './AccountItem.module.scss';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from '~/assets/images';
import Image from "../Image";

const context = classNames.bind(styles);

function AccountItem({ data }) {
    return ( 
        <Link to={`/@${data.nickname}`} className={context('wrapper')}>
            <Image 
                className={context('avatar')} 
                // src={images.user} 
                src={data.avatar}
                alt={data.full_name} 
            />
            
            <div className={context('info')}>
                <p className={context('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={context('check-icon')} />}
                </p>
                <span className={context('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;