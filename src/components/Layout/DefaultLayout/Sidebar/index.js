import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const context = classNames.bind(styles);

function Sidebar() {
    return ( 
        <aside className={context('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
     );
}

export default Sidebar;