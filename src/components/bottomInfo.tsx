import React from 'react';
import '../App.css';

// post.tsx
export default function BottomInfo() {
    return (
        <div
            style={{
                width: '100vw',
                height: '200px',
                backgroundColor: '#E64D3D',
                textAlign: 'left',
                fontFamily: 'Pretendard-Regular',
                fontSize: '15px'
            }}
        >
            <div
                style={{
                    width:'80%',
                    margin:'0 auto',
                    paddingTop:'50px'
                }}
            >
                Copyright ⓒPHOENIX All Rights Reserved
            </div>
            <hr
                style={{
                    width:'80%',
                    height:'0.5px',
                    border:'none',
                    backgroundColor:'#fff',
                    marginTop:'10px'
                }}
            />
            <div
                style={{
                    width:'80%',
                    margin:'20px auto',
                    textAlign:'left',
                    fontSize: '14px',
                    lineHeight:'20px'
                }}
            >
                2024.08.31.
                <br />
                In 2024 AWS와 함께하는 소중한 상명 해커톤 "인텔리전스 캠퍼스 해커톤"
                <br />
                Made By 김종우, 맹의현, 이다원, 조희주
            </div>
        </div>
    );
}
