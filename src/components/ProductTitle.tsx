import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
    title?: string,    
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({title, className, style}: Props) => {
    const {product} = useContext(ProductContext);

    return (
        <span className={`${className} ${styles.productDescription}`} style={style}>
            {title? title: product.title}
        </span>
    )
}