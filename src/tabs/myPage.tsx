import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/button.tsx';
import Nav from '../components/nav.tsx';
import BottomInfo from '../components/bottomInfo.tsx';
import '../App.css';

export default function ApplyStudy() {
    const [mypageList, setMypageList] = useState('내 정보');

    return (
        <div>
            <Nav type="myPage" />
            <div className="background">
                <div style={{ height: '200vh', display: 'flex', padding: '100px 0' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                            y: { duration: 0.5 },
                        }}
                        style={{
                            boxSizing: 'border-box',
                            position: 'relative',
                            width: '400px',
                            borderRight: '1px solid #444',
                            textAlign: 'left',
                        }}
                    >
                        <div style={{
                                width: '150px',
                                fontFamily: 'Pretendard-Bold',
                                fontSize: '30px',
                                color: '#fff',
                                position: 'absolute',
                                right: '50px',
                                textAlign: 'right',
                            }}>
                                마이페이지
                                <div
                                    style={{
                                        marginTop: '40px',
                                        fontFamily: 'Pretendard-Regular',
                                        fontSize: '16px',
                                    }}
                                >
                                    <div>
                                        <div
                                            className="post_tabs"
                                            style={mypageList === '내 정보' ? { color: '#E64D3D' } : {}}
                                            onClick={() => {
                                            setMypageList('내 정보');
                                            }}
                                        >
                                        내 정보
                                        </div>
                                        <div
                                            className="post_tabs"
                                            style={mypageList === '카테고리 및 링크' ? { color: '#E64D3D' } : {}}
                                            onClick={() => {
                                                setMypageList('카테고리 및 링크');
                                            }}
                                        >
                                        카테고리 및 링크
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                            y: { duration: 0.5 },
                        }}
                        style={{
                            boxSizing: 'border-box',
                            position: 'relative',
                            width: '1120px',
                            height: '100%',
                            textAlign: 'left',
                        }}
                    >
                        <div style={{ width: '810px', position: 'absolute', left: '60px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    fontFamily: 'Pretendard-Bold',
                                    fontSize: '30px',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                {mypageList === '내 정보' ? (
                                    <div>내 정보</div>
                                ) : mypageList === '카테고리 및 링크' ? (
                                    <div>카테고리 및 링크</div>
                                ) : (<></>)
                                }
                            </div>

                            <div>
                                {mypageList === '내 정보' ? (
                                    <div style={{width:'100%', marginTop:'40px'}}>
                                        <div
                                            style={{
                                                width: '100%',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '16px',
                                            }}
                                        >
                                            <div>이름</div>
                                            <div style={{marginLeft:'120px'}}>홍길동</div>
                                        </div>
                                        <div
                                            style={{
                                                width: '100%',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '16px',
                                            }}
                                        >
                                            <div>나이</div>
                                            <div style={{marginLeft:'120px'}}>20</div>
                                        </div>
                                        <div
                                            style={{
                                                width: '100%',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '16px',
                                            }}
                                        >
                                            <div>성별</div>
                                            <div style={{marginLeft:'120px'}}>남</div>
                                        </div>
                                        <div
                                            style={{
                                                width: '100%',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '16px',
                                            }}
                                        >
                                            <div>이메일</div>
                                            <div style={{marginLeft:'105px'}}>202010000@sangmyung.ac.kr</div>
                                        </div>
                                        <div
                                            style={{
                                                width: '100%',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '16px',
                                            }}
                                        >
                                            <div>전화번호</div>
                                            <div style={{marginLeft:'90px'}}>010-1111-2222</div>
                                        </div>
                                    </div>
                                ) : mypageList === '카테고리 및 링크' ? (
                                    <form style={{width:'50%', marginTop:'40px'}}>
        <div style={{color: '#fff', marginBottom: '20px', fontSize: '18px', fontFamily: 'Pretendard-SemiBold'}}>
            관심 카테고리 선택 (최대 4개)
        </div>
        {['AI', '주식', '스포츠', '엔터테인먼트', '기술', '정치', '경제', '과학', '건강', '여행'].map((category, index) => (
            <div key={index} style={{marginBottom: '10px'}}>
                <input 
                    type="checkbox" 
                    id={`category-${index}`} 
                    name="category" 
                    value={category}
                    style={{marginRight: '10px'}}
                    onChange={(e) => {
                        const checkboxes = document.querySelectorAll('input[name="category"]:checked');
                        if (checkboxes.length > 4) {
                            e.target.checked = false;
                        }
                    }}
                />
                <label htmlFor={`category-${index}`} style={{color: '#fff', fontFamily: 'Pretendard-Regular'}}>
                    {category}
                </label>
            </div>
        ))}
        <button 
            type="submit" 
            style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#E64D3D',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontFamily: 'Pretendard-SemiBold'
            }}
        >
            저장
        </button>
    </form>
                                ) : (<></>)
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>

                <BottomInfo />
            </div>
        </div>
    );
}
