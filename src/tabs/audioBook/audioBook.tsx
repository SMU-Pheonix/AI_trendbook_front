import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/button.tsx';
import Nav from '../../components/nav.tsx';
import BottomInfo from '../../components/bottomInfo.tsx';
import '../../App.css';

export default function ApplyStudy() {
    const [audioList, setAudioList] = useState('AI');

    return (
        <div>
            <Nav type="audioBook" />
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
                            }}
                        >
                            오디오북
                            <div
                                style={{
                                    marginTop: '40px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                }}
                            >
                                <div
                                    className="post_tabs"
                                    style={audioList === 'AI' ? { color: '#E64D3D' } : {}}
                                    onClick={() => {
                                        setAudioList('AI');
                                    }}
                                >
                                    AI
                                </div>

                                <div
                                    className="post_tabs"
                                    style={audioList === 'Stock' ? { color: '#E64D3D' } : {}}
                                    onClick={() => {
                                        setAudioList('Stock');
                                    }}
                                >
                                    Stock
                                </div>
                                <div
                                    className="post_tabs"
                                    style={audioList === 'Sports' ? { color: '#E64D3D' } : {}}
                                    onClick={() => {
                                        setAudioList('Sports');
                                    }}
                                >
                                    Sports
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
                                {audioList === 'AI' ? (
                                    <div>AI</div>
                                ) : audioList === 'Stock' ? (
                                    <div>Stock</div>
                                ) : audioList === 'Sports' ? (
                                    <div>Sports</div>
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
