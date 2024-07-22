import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const context = classNames.bind(styles);

function Header() {
    return <header className={context('wrapper')}>
        <div className={context('inner')}></div>
    </header>;
}

export default Header;