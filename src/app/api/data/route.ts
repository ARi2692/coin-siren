import { NextRequest, NextResponse } from 'next/server';

const profilePicUrl = '/profilePic.png';

export async function GET(req: NextRequest) {
  const profiles = [
    { name: 'Abhishek Gupta', title: 'Engineer', Exp: '2y+', img: profilePicUrl, Skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
    { name: 'Abhishek Gupta', title: 'Engineer', Exp: '2y+', img: profilePicUrl, Skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
    { name: 'Abhishek Gupta', title: 'Engineer', Exp: '2y+', img: profilePicUrl, Skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
  ];
  
  return NextResponse.json(profiles);
}
