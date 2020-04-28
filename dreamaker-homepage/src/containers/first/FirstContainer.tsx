import styles from './FirstContainer.scss'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

class FirstContainer extends Component {

    static defaultProps = {

    }

    static propTypes = {

    }


    render() {
        const cx = classNames.bind(styles)

        return (
            <div className={cx("wrapper-container-first", 'font-white')}>
                <p className={cx("medium-small-regular-font")} style={{ paddingTop: "40vh" }}>소프트웨어 외주 개발 서비스</p>
                <p className={cx('tiny-regular-font', 'fade-in-up-1s')}>자사만의 서비스를 개발하고 싶지만 너무 높은 금액 때문에 망설이셨나요?</p>
                <p className={cx('tiny-regular-font', 'fade-in-up-1s')} style={{ marginTop: "-20px" }}> 자사만의 서비스를 개발하고 싶지만 개발자가 없어 고민이신가요?</p>
                <p className={cx('small-tiny-regular-font', 'fade-in-up-1s')}>그 고민, 드림메이커와 함께 해결해보세요!</p>
                {/* <Button value="자세히 보기" /> */}
                <p className={cx('tiny-regular-font', 'fade-in-up-1s', 'font-gray')} style={{ marginTop: "20px" }}>&#8251; 한 번에 한 프로젝트만 정확히 진행합니다.</p>
                <p className={cx('tiny-regular-font', 'fade-in-up-1s', 'font-gray')} style={{ marginTop: "-10px" }}>&#8251; 본사가 직접 개발하지 않은 프로젝트의 유지보수는 진행하지 않습니다.</p>
            </div>
        );
    }
}

export default FirstContainer