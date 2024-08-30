import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/button.tsx';
import Nav from '../components/nav.tsx';
import BottomInfo from '../components/bottomInfo.tsx';
import '../App.css';

export default function Main() {


    return (
        <div>
            <Nav type="main" />
            <div id="background" className="background">
                <div
                    style={{
                        position: 'absolute',
                        top: ' 0',
                        left: '0',
                        width: '100vw',
                        height: '100vh',
                        opacity: '0.4',
                        zIndex: '-1',
                    }}
                >
                    <img src="../../img/main_background.png" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                    }}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <img src="../../img/main_text.png" style={{ width: '750px' }} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        y: { duration: 1 },
                    }}
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <div
                        style={{
                            padding: '60px 0',
                            fontFamily: 'Pretendard-Bold',
                            fontSize: '40px',
                            color: '#fff',
                            textShadow: '0 0 0.1em, 0 0 0.1em',
                        }}
                    >
                        About Us
                    </div>
                    <div
                        style={{
                            width: '70%',
                            textAlign: 'left',
                            margin: '0 auto',
                            fontFamily: 'Pretendard-Light',
                            fontSize: '17px',
                            color: '#fff',
                            lineHeight: '30px',
                        }}
                    >
                        <span style={{ color: '#E64D3D', fontFamily: 'Pretendard-SemiBold', fontSize: '20px' }}>
                            'PHOENIX'
                        </span>
                        는 다양한 분야의 최신 소식을 한꺼번에 모아 요약하여 음성으로 제공하는 서비스입니다.
                        자료 탐색에 어려움을 겪는 학생들이나 매일 기사나 게시물을 하나하나 찾아보기 귀찮은 사람들을 위해
                        사이트의 링크만 등록하면 해당 사이트에 대한 요약 정보를 제공합니다.
                        또한, 음성 서비스를 통해 출근이나 통학할 때 간단하게 그날의 정보를 접할 수 있도록 지원합니다.
                        <br />
                        <br />
                        'PHOENIX'에 가입하게 되면 카테고리를 개인에 맞추어 설정할 수 있고, 선택한 카테고리에 맞춰 기본적으로 설정된 사이트가 등록됩니다.
                        만약 희망하는 사이트가 있다면 개인 설정에서 희망하는 링크를 등록할 수 있습니다.
                        최종적으로 설정한 카테고리와 링크의 그날 최신 이슈에 대한 요약된 정보를 텍스트 및 음성으로 제공 받을 수 있습니다.
                    </div>
                    <div
                        style={{
                            width: '25%',
                            height: '250px',
                            margin: '0 auto',
                            marginTop: '30px',
                            backgroundColor: '#111015',
                            borderRadius: '20px',
                            boxShadow: 'inset -10px -10px 30px #242424, inset 15px 15px 30px #000',
                        }}
                    >
                        <img src="../img/main_logo.png" style={{ height: '210px', marginTop: '20px' }} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        y: { duration: 1 },
                    }}
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <div>
                        <div
                            style={{
                                padding: '60px 0',
                                fontFamily: 'Pretendard-Bold',
                                fontSize: '40px',
                                color: '#fff',
                                textShadow: '0 0 0.1em, 0 0 0.1em',
                            }}
                        >
                            How Work
                        </div>
                        <div
                            style={{
                                width: '70%',
                                textAlign: 'left',
                                margin: '0 auto',
                                fontFamily: 'Pretendard-Light',
                                fontSize: '17px',
                                color: '#fff',
                                lineHeight: '30px',
                            }}
                        >
                            <span style={{ color: '#E64D3D', fontFamily: 'Pretendard-SemiBold', fontSize: '20px' }}>
                            'PHOENIX'
                            </span>
                            는 다양한 기술을 사용하여 편의를 제공하려고 노력하고 있습니다.
                        </div>
                        <div
                            style={{
                                width: '70%',
                                height: '370px',
                                margin: '0 auto',
                                marginTop: '70px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    width: '30%',
                                    height: '370px',
                                    backgroundColor: '#111015',
                                    borderRadius: '20px',
                                    boxShadow: 'inset -10px -10px 30px #242424, inset 15px 15px 30px #000',
                                }}
                            >
                                <div>
                                    <img src="../img/icon/analysis.png" style={{ height: '150px', marginTop: '20px' }} />
                                </div>
                                <div
                                    style={{
                                        margin: '10px 0 30px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        color: '#fff',
                                    }}
                                >
                                    정확한 사용자 분석
                                </div>
                                <div
                                    style={{
                                        width: '80%',
                                        textAlign: 'left',
                                        margin: '0 auto',
                                        fontFamily: 'Pretendard-Light',
                                        fontSize: '15px',
                                        color: '#fff',
                                        lineHeight: '20px',
                                    }}
                                >
                                    보다 정확한 사용자의 관심사를 파악하기 위해 세분화된 카테고리와 폭넓은 링크를 지원함으로써 분석을 진행합니다.
                                    <br /><br />
                                    <span
                                        style={{
                                            color: '#E64D3D',
                                            lineHeight: '40px',
                                        }}
                                    >
                                        #카테고리_세분화 #폭넓은_링크_지원
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '30%',
                                    height: '370px',
                                    backgroundColor: '#111015',
                                    borderRadius: '20px',
                                    boxShadow: 'inset -10px -10px 30px #242424, inset 15px 15px 30px #000',
                                }}
                            >
                                <div>
                                    <img src="../img/icon/tts.png" style={{ height: '150px', marginTop: '20px' }} />
                                </div>
                                <div
                                    style={{
                                        margin: '10px 0 30px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        color: '#fff',
                                    }}
                                >
                                    음성 서비스 제공
                                </div>
                                <div
                                    style={{
                                        width: '80%',
                                        textAlign: 'left',
                                        margin: '0 auto',
                                        fontFamily: 'Pretendard-Light',
                                        fontSize: '15px',
                                        color: '#fff',
                                        lineHeight: '20px',
                                    }}
                                >
                                    TTS를 통해 음성 서비스를 제공하여 바쁜 일상 속에서도 편리하게 최근 이슈를 접할 수 있습니다.
                                    <br />
                                    <br />
                                    <span
                                        style={{
                                            color: '#E64D3D',
                                            lineHeight: '40px',
                                        }}
                                    >
                                        #음성_서비스 #언디서든_언제나
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '30%',
                                    height: '370px',
                                    backgroundColor: '#111015',
                                    borderRadius: '20px',
                                    boxShadow: 'inset -10px -10px 30px #242424, inset 15px 15px 30px #000',
                                }}
                            >
                                <div>
                                    <img src="../img/icon/history.png" style={{ height: '150px', marginTop: '20px' }} />
                                </div>
                                <div
                                    style={{
                                        margin: '10px 0 30px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        color: '#fff',
                                    }}
                                >
                                    요약 기록 저장
                                </div>
                                <div
                                    style={{
                                        width: '80%',
                                        textAlign: 'left',
                                        margin: '0 auto',
                                        fontFamily: 'Pretendard-Light',
                                        fontSize: '15px',
                                        color: '#fff',
                                        lineHeight: '20px',
                                    }}
                                >
                                    요약한 기록을 저장하여 전에 일어났던 이슈들을 한눈에 파악할 수 있도록 기능을 지원합니다.
                                    <br />
                                    <br />
                                    <span
                                        style={{
                                            color: '#E64D3D',
                                            lineHeight: '40px',
                                        }}
                                    >
                                        #요약_기록 #그날의_이슈
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <BottomInfo />
            </div>
        </div>
    );
}
