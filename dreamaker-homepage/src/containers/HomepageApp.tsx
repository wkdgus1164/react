import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import nodemailer from 'nodemailer'
import HorizontalList from '../components/horizontal-list/HorizontalList'
import FirstContainer from './first/FirstContainer'
import SecondContainer from './second/SecondContainer'
import ThirdContainer from './third/ThirdContainer'
import FooterContainer from './footer/FooterContainer'

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'ceo@dreamaker.biz',
//         pass: 'Hanjobs991208'
//     }
// })

// const mailOption = {
//     from: 'ceo@dreamaker.biz',
//     to: 'ceo@dreamaker.biz',
//     subject: '[드림메이커 홈페이지] 개발 견적 문의',
//     text: 'asdf'
// }

// transporter.sendMail(mailOption, (err, info) => {
//     if (err) console.log('Send Mail Error : ' + err);
//     else console.log('Message sent : ', info);
// })

const HomepageApp: React.FC = () => {
    return (
        <BrowserRouter>
            <HorizontalList value1="회사 소개" value2="요금 안내" value3="포트폴리오" value4="asdf" />
            {/* <div className="wrapper-container-left">left side bar</div> */}
            {/* <div className="wrapper-container-right">right side bar</div> */}
            <div className="wrapper-container">
                <FirstContainer />
                <SecondContainer />
                <ThirdContainer />
                <FooterContainer />
            </div>
        </BrowserRouter >
    )
}

export default HomepageApp