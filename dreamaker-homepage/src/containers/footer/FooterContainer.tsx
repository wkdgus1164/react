import styles from './FooterContainer.scss'
import React from 'react'
import classNames from 'classnames/bind';
import Button from '../../components/button/Button';

const cx = classNames.bind(styles)

const FooterContainer: React.FC = () => {
    return (
        <div className="wrapper-container-footer">
            <div className={cx("container-left", 'font-white', 'mini-regular-font')} style={{ lineHeight: "1.7" }}>
                <p>상호 : 주식회사 드림메이커 | 기업이 꿈꾸는 소프트웨어를 만듭니다.</p>
                <p>사업자등록번호 : 888-86-01529 | 법인등록번호 : 120111-1032945</p>
                <p>문의 : 070-4120-6669 (대표이사 한장현)</p>
                <p>온라인 문의 : <a href="mailto:ceo@dreamaker.biz">ceo@dreamaker.biz</a> (경영기획팀) | <a href="mailto:oen142123@dreamaker.biz">oen142123@dreamaker.biz</a> (개발팀)</p>
                <p>본사 주소 : 인천광역시 미추홀구 구월로 15, 2층 201호</p>
                <br /><br />
                <p>저작권 이미지 출처 : <a href="https://pixabay.com/">https://pixabay.com/</a></p>
            </div>
            <div className={cx("container-right", 'font-white', 'tiny-regular-font')}>
                <Button value="회사소개서 다운로드" />
            </div>
        </div>
    )
}

export default FooterContainer