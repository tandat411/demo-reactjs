import classNames from "classnames/bind";
import styles from './Popper.module.scss';

const context = classNames.bind(styles);

function Wrapper({ children, className }) {
    return ( 
        <div className={context('wrapper', className)}>{ children }</div>
     );
}

export default Wrapper;