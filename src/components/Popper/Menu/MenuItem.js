import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './Menu.module.scss';

const context = classNames.bind(styles);

function MenuItem({ data }) {
    return ( 
        <Button className={context('menu-item')} leftIcon={data.icon} to={data.to} >
            {data.title}
        </Button>
    );
}

export default MenuItem;