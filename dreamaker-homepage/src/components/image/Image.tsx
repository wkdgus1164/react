import React from 'react'
import classNames from 'classnames/bind'
import styles from './Image.scss'

const cx = classNames.bind(styles)

type ImageProps = {
    src: string
    width?: number
    height?: number
}

export const Image: React.FC<ImageProps> = ({ src, width, height }) => {
    return <img className={cx('default-image')} src={src} width={width} height={height} style={{ marginTop: "13px" }} alt="이미지" />
}
export const MemberImage: React.FC<ImageProps> = ({ src }) => {
    return <img className={cx('member-image')} src={src} alt="이미지" />
}

export default Image