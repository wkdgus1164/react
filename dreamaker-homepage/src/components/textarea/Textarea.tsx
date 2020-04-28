import React from 'react'
import classNames from 'classnames/bind';
import styles from './Textarea.scss';

const cx = classNames.bind(styles)

type TextareaProps = {
    type: string
    height?: number
    id?: string
    name?: string
    value?: string
    placeholder?: string
}

const Textarea: React.FC<TextareaProps> = props => {
    return (
        <textarea
            className={cx('default-textarea')}
            id={props.id}
            rows={props.height}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

export default Textarea