import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const context = classNames.bind(styles);

function Button({ 
    className = false,
    to, 
    href, 
    text = false,
    primary = false, 
    outline = false,
    disable = false,
    rounded= false,
    size = 'medium', 
    children,
    leftIcon, 
    rightIcon, 
    onClick, 
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps
    };

    if (to) {
        props.to = to;
        Component = Link;

    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    // Remove event onclick when disable
    if (disable) {
        delete props.onClick;
    }

    const classes = context('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        disable,
        rounded,
        [size]: size
    });

    return ( 
        <Component className={classes} {...props} >
            {leftIcon && <span className={context('icon')}>{leftIcon}</span>}
            <span className={context('title')}>{children}</span>
            {rightIcon && <span className={context('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;