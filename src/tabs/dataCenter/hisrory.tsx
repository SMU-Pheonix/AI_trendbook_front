import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import moment from 'moment';
import Button from '../../components/button.tsx';
import Nav from '../../components/nav.tsx';
import BottomInfo from '../../components/bottomInfo.tsx';
import SmallCalendar from '../../components/smallCalendar.tsx';
import DateData from '../../mockup_data/date_data.tsx';
import '../../App.css';

export default function Knowledge() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const data = DateData();

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    return (
        <div>
            <Nav type="dataCenter" />
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
                            textAlign: 'right',
                        }}
                    >
                        <div style={{
                                width: '250px',
                                fontFamily: 'Pretendard-Bold',
                                fontSize: '30px',
                                color: '#fff',
                                position: 'absolute',
                                right: '50px',
                            }}>
                                요약 내역
                                <div
                                style={{
                                    marginTop: '40px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                }}
                            >
                                <SmallCalendar onDateSelect={handleDateSelect} />
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
                                {moment(selectedDate).format('YYYY-MM-DD')} 요약
                            </div>
                            
                            <div
                                style={{
                                    marginTop:'40px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '18px',
                                    color: '#fff',
                                    lineHeight:'25px',
                                }}
                            >
                                <pre
                                    style={{
                                        marginTop:'40px',
                                        fontFamily: 'Pretendard-Regular',
                                        fontSize: '17px',
                                        color: '#fff',
                                        lineHeight:'30px',
                                    }}
                                >
                                    {data.filter((data) => data.date === moment(selectedDate).format('YYYY-MM-DD')).length !== 0 ?
                                        data.filter((data) => data.date === moment(selectedDate).format('YYYY-MM-DD'))[0].content
                                    : (<></>)}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <BottomInfo />
            </div>
        </div>
    );
}
