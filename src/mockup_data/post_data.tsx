import React from 'react';
import '../App.css';

// post.tsx
export default function PostData() {
    return [
        {
            id: 2,
            title: '시스템 업데이트 안내',
            date: '2024-09-01',
            content: '시스템 업데이트를 진행합니다.\n내역: 오디오북 오류 개선',
            category: '업데이트 공지',
        },
        {
            id: 1,
            title: 'PHOENIX를 잘 사용하는 법!!',
            date: '2024-08-31',
            content: 'PHOENIX를 효율적으로 사용해보세요.\n\n1.\n2.\n3.',
            category: '정보 공유',
        },
    ];
}
