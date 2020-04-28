import React from 'react'
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles)

type ButtonProps = {
    value: string
}

const handleClick = () => {
    alert('준비 중입니다.')
}

const Button: React.FC<ButtonProps> = props => {
    return <button className={cx("button-black", 'tiny-regular-font')} onClick={handleClick}>{props.value}</button>
}

export default Button