import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const context = classNames.bind(styles);

function DefaultLayout({ children }) {
    return ( 
        <div className={context('wrapper')}>
            <Header />
            <div className={context('container')}>
                <Sidebar />
                <div className={context('content')}>
                    {children}
                </div>
            </div>
            
        </div>
     );
}

export default DefaultLayout;