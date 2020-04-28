import styles from './SecondContainer.scss'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { MemberImage } from '../../components/image/Image'

class SecondContainer extends Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    render() {
        const cx = classNames.bind(styles)

        return (
            <div className={cx("wrapper-container-second")}>
                <div className="member-title" style={{ display: "block", textAlign: "center" }}>
                    <p className={cx('small-bold-font', 'font-white')}>구성원 소개</p>
                    <p className={cx('small-tiny-regular-font', 'font-white')}>드림메이커는 젊고 전문적인 인력들로 구성되어 있습니다.</p>
                </div>
                <div className="member-wrapper">
                    <div className="member-card">
                        <div className={cx("member-name", "font-white", "small-tiny-regular-font")}>한장현
                            <p className={cx("tiny-regular-font", 'font-white')} style={{ marginTop: "10px" }}>대표이사</p>
                        </div>
                        <MemberImage src="http://placehold.it/400x350" />
                        <div className={cx("member-detail", "font-white", "tiny-regular-font")}>
                            <ul>
                                <li>안드로이드, 노드 기반 웹 개발</li>
                                <li>안드로이드 앱 개발 전국대회 4회 수상</li>
                                <li>기술창업 3회 경험</li>
                            </ul>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className={cx("member-name", "font-white", "small-tiny-regular-font")}>김종완
                            <p className={cx("tiny-regular-font", 'font-white')} style={{ marginTop: "10px" }}>개발팀장</p>
                        </div>
                        <MemberImage src="http://placehold.it/400x350" />
                        <div className={cx("member-detail", "font-white", "tiny-regular-font")}>
                            <ul>
                                <li>안드로이드, 서버 풀스택 개발</li>
                                <li>다수 외주 프로젝트 진행 경력</li>
                                <li>정보처리기사 등 개발자 필수 자격 인증</li>
                            </ul>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className={cx("member-name", "font-white", "small-tiny-regular-font")}>라정우
                            <p className={cx("tiny-regular-font", 'font-white')} style={{ marginTop: "10px" }}>개발연구원</p>
                        </div>
                        <MemberImage src="http://placehold.it/400x350" />
                        <div className={cx("member-detail", "font-white", "tiny-regular-font")}>
                            <ul>
                                <li>안드로이드 전문 개발</li>
                                <li>컴퓨터소프트웨어공학 4년제 학위 보유</li>
                                <li>정보처리기사 등 개발자 필수 자격 인증</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondContainer