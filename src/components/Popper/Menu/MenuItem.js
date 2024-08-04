import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './Menu.module.scss';

const context = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = context('menu-item', {
        separate: data.separate
    });

    return ( 
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick} >
            {data.title}
        </Button>
    );
}

export default MenuItem;