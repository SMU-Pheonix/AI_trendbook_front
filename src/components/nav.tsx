import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import '../App.css';

type NavType = 'logOut' | 'main' | 'community' | 'aboutUs' | 'dataCenter' | 'audioBook' | 'myPage';

export default function Nav(props: NavType) {
    const { type } = props;
    const [hover, setHover] = useState(false);
    const [currentFocus, setCurrentFocus] = useState('');

    return (
        <div
            style={{
                position: 'fixed',
                top: ' 0',
                width: '100%',
                zIndex: '2',
            }}
            onMouseLeave={() => setHover(false)}
        >
            <div
                style={{
                    width: '100%',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#111015',
                    borderBottom: hover ? '2px solid #555' : 'none',
                }}
            >
                <div style={{ position: 'absolute', left: '30px' }}>
                    <Link to="/">
                        <img src="../img/small_logo.png" style={{ width: '150px', marginTop: '5px' }} />
                    </Link>
                </div>
                <div style={{ width: '720px', display: 'flex' }} onMouseEnter={() => setHover(true)}>
                    <div
                        className="nav_text"
                        style={
                            props.type === 'aboutUs'
                                ? {
                                      color: '#E64D3D',
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : currentFocus === 'aboutUs'
                                ? {
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : {}
                        }
                    >
                        About Us
                    </div>
                    <div
                        className="nav_text"
                        style={
                            props.type === 'audioBook'
                                ? {
                                      color: '#E64D3D',
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : currentFocus === 'audioBook'
                                ? {
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : {}
                        }
                    >
                        Trend Book
                    </div>
                    <div
                        className="nav_text"
                        style={
                            props.type === 'dataCenter'
                                ? {
                                      color: '#E64D3D',
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : currentFocus === 'dataCenter'
                                ? {
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : {}
                        }
                    >
                        Data Center
                    </div>
                    <div
                        className="nav_text"
                        style={
                            props.type === 'community'
                                ? {
                                      color: '#E64D3D',
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : currentFocus === 'community'
                                ? {
                                      textShadow: '0 0 0.1em, 0 0 0.3em',
                                      borderBottom: '2px solid #E64D3D',
                                  }
                                : {}
                        }
                    >
                        Community
                    </div>
                </div>
                {type === 'logOut' ? (
                    <div style={{ position: 'absolute', right: '0' }}>
                        <Button
                            type="login"
                            size="login"
                            title="Log In"
                            onClick={() => {
                                window.location = '/main';
                            }}
                        />
                    </div>
                ) : (
                    <div style={{ position: 'absolute', right: '0', display: 'flex', alignItems: 'center' }}>
                        <Link to="/myPage" style={{ textDecoration: 'none' }}>
                            <div
                                className="nav_text"
                                style={
                                    props.type === 'myPage'
                                        ? {
                                              color: '#E64D3D',
                                              textShadow: '0 0 0.1em, 0 0 0.3em',
                                              borderBottom: '2px solid #E64D3D',
                                          }
                                        : {}
                                }
                                onMouseEnter={() => setHover(true)}
                            >
                                MyPage
                            </div>
                        </Link>
                        <img
                            src="../img/btn/logout_disabled.png"
                            style={{ width: '35px', padding: '0 20px', cursor: 'pointer' }}
                            onClick={() => {
                                window.location = '/';
                            }}
                            onMouseOver={(event) => {
                                event.target.src = `../img/btn/logout_disabled.png`;
                            }}
                            onMouseOut={(event) => {
                                event.target.src = `../img/btn/logout_disabled.png`;
                            }}
                        />
                    </div>
                )}
            </div>

            <div
                style={{
                    width: '100%',
                    height: hover ? '150px' : '0',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#151515',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                }}
            >
                <div style={{ width: '720px', display: 'flex' }} onMouseEnter={() => setHover(true)}>
                    <div
                        className="nav_list"
                        style={{ borderLeft: '1px solid #777' }}
                        onMouseEnter={() => setCurrentFocus('aboutUs')}
                        onMouseLeave={() => setCurrentFocus('')}
                    >
                        <Link to="/introduction" style={{ textDecoration: 'none' }}>
                            <div className="nav_tabs">서비스 소개</div>
                        </Link>
                    </div>
                    <div
                        className="nav_list"
                        onMouseEnter={() => setCurrentFocus('audioBook')}
                        onMouseLeave={() => setCurrentFocus('')}
                    >
                        <Link to="/audioBook" style={{ textDecoration: 'none' }}>
                            <div className="nav_tabs">트렌드북</div>
                        </Link>
                    </div>
                    <div
                        className="nav_list"
                        onMouseEnter={() => setCurrentFocus('dataCenter')}
                        onMouseLeave={() => setCurrentFocus('')}
                    >
                        <Link to="/article" style={{ textDecoration: 'none' }}>
                            <div className="nav_tabs">오늘의 최신기사</div>
                        </Link>
                        <Link to="/history" style={{ textDecoration: 'none' }}>
                            <div className="nav_tabs">요약 내역</div>
                        </Link>
                    </div>
                    <div
                        className="nav_list"
                        onMouseEnter={() => setCurrentFocus('community')}
                        onMouseLeave={() => setCurrentFocus('')}
                    >
                        <Link to="/postBoard" style={{ textDecoration: 'none' }} onClick={() => sessionStorage.clear()}>
                            <div className="nav_tabs">공지사항</div>
                        </Link>
                        {/* 
                        <Link to="/fAQ" style={{ textDecoration: 'none' }}>
                            <div className="nav_tabs">FAQ</div>
                        </Link>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}
