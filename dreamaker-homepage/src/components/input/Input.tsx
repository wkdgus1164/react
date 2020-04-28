import React from 'react'
import classNames from 'classnames/bind';
import styles from './Input.scss';

const cx = classNames.bind(styles)

type InputProps = {
    type: string
    id?: string
    name?: string
    value?: string
    placeholder?: string
}

const Input: React.FC<InputProps> = props => {
    return (
        <input
            className={cx('default-input')}
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

export default Input