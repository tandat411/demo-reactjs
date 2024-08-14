import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from "./SuggestedAccounts.module.scss";
import SuggestedAccountsItem from "./SuggestedAccountsItem";

const context = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={context('wrapper')} >
            <p className={context('label')} >
                {label}
            </p>
            <SuggestedAccountsItem />
            <SuggestedAccountsItem />
            <SuggestedAccountsItem />
            <SuggestedAccountsItem />
            <SuggestedAccountsItem />
            <SuggestedAccountsItem />

            <p className={context('more-btn')}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
};

export default SuggestedAccounts;