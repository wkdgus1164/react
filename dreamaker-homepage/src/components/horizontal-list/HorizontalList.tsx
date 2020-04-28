import React from 'react'
import styles from './HorizontalList.scss'
import { NavLink } from 'react-router-dom';
import { Image } from './../image/Image';
import logo from '../../images/logo.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

type HorizontalListProps = {
    value1: string
    value2?: string
    value3?: string
    value4?: string
}

const HorizontalList: React.FC<HorizontalListProps> = props => {

    const activeStyle = {
        color: 'gray'
    }

    return (
        <div className="horizontal-list-background">
            <NavLink exact to="/" activeStyle={activeStyle}><Image src={logo} width={15} /></NavLink>
            {/* <NavLink exact to="/intro" className={cx("default-li", 'tiny-bold-font', 'font-white')} activeStyle={activeStyle}>{props.value1}</NavLink>
            <NavLink exact to="/price" className={cx("default-li", 'tiny-bold-font', 'font-white')} activeStyle={activeStyle}>{props.value2}</NavLink>
            <NavLink exact to="/portfolio" className={cx("default-li", 'tiny-bold-font', 'font-white')} activeStyle={activeStyle}>{props.value3}</NavLink> */}
            <button className={cx('menu')}></button>
        </div>
    )
}

export default HorizontalList