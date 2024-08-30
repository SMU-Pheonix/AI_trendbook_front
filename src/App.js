import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './tabs/main.tsx';
import MainLogIn from './tabs/mainLogIn.tsx';
import MyPage from './tabs/myPage.tsx';
import Introduction from './tabs/AboutUs/introduction.tsx';
import AudioBook from './tabs/audioBook/audioBook.tsx';
import Article from './tabs/dataCenter/article.tsx';
import History from './tabs/dataCenter/hisrory.tsx';
import Post from './tabs/community/post.tsx';
import PostAdd from './tabs/community/postAdd.tsx';
import PostEdit from './tabs/community/postEdit.tsx';
import PostBoard from './tabs/community/postBoard.tsx';
import FAQ from './tabs/community/fAQ.tsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/main" element={<MainLogIn />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/audioBook" element={<AudioBook />} />
                    <Route path="/Article" element={<Article />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/postAdd" element={<PostAdd />} />
                    <Route path="/postEdit" element={<PostEdit />} />
                    <Route path="/postBoard" element={<PostBoard />} />
                    <Route path="/fAQ" element={<FAQ />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
