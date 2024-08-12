import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { NavLink } from "react-router-dom";

const context = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => context('menu-item', {active: nav.isActive})}>
            <span className={context('icon-normal')} >
                {icon.normal}
            </span>
            <span className={context('icon-active')} >
                {icon.active}
            </span>
            
            <span className={context('menu-title')} >
                {title}
            </span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default MenuItem;