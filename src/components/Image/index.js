import { forwardRef, useState } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from './Image.module.scss';

const context = classNames.bind(styles);

function Image({ src, className, ...props}, ref) {

    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };
   

    return (
        <img 
            ref={ref} 
            className={classNames(styles.wrapper, className)}
            src={fallBack || src} 
            {...props} 
            onError={handleError} 
        />
    );
}

export default forwardRef(Image);