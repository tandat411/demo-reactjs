import classNames from "classnames/bind";
import styles from './Popper.module.scss';

const context = classNames.bind(styles);

function Wrapper({ children }) {
    return ( 
        <div className={context('wrapper')}>{ children }</div>
     );
}

export default Wrapper;