import styles from './ThirdContainer.scss'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import Input from '../../components/input/Input'
import Textarea from './../../components/textarea/Textarea';

class ThirdContainer extends Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    render() {
        const cx = classNames.bind(styles)

        return (
            <div className="mailing-form">
                <div className={cx('medium-small-regular-font')}>견적 문의하기</div>
                문의 접수가 완료되면 담당자가 2~3일 내에 메일 또는 연락처로 연락드릴 예정입니다.<br /><br />
                <p style={{ color: 'red' }}>현재 이메일 전송 기능이 완료되지 않았습니다. 상담을 위해 카카오톡 플러스친구 @dreammaker 로 채팅을 걸어 주시거나 ceo@dreamaker.biz 로 연락 부탁드려요!</p>
                <div className="form" style={{ marginTop: '50px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>제목</div>
                    <Input type="text" placeholder="제목을 입력하세요." />
                </div>
                <div className="form" style={{ marginTop: '20px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>담당자명</div>
                    <Input type="text" placeholder="담당자명을 입력하세요." />
                </div>
                <div className="form" style={{ marginTop: '20px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>담당자 이메일</div>
                    <Input type="text" placeholder="담당자 이메일을 입력하세요." />
                </div>
                <div className="form" style={{ marginTop: '20px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>담당자 연락처</div>
                    <Input type="text" placeholder="담당자 연락처를 입력하세요." />
                </div>
                <div className="form" style={{ marginTop: '20px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>요청 내용</div>
                    <Textarea type="text" height={10} placeholder="프로젝트 내용, 산정기간, 예상금액 등 내용을 상세히 적어 주시면 좋습니다." />
                </div>
                <div className="form" style={{ marginTop: '20px' }}>
                    <div className={cx("mailing-title", 'tiny-regular-font')}>비고</div>
                    <Input type="text" placeholder="제목을 입력하세요." />
                </div>
            </div>
        )
    }
}

export default ThirdContainer