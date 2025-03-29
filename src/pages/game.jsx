import React, { useState } from "react";
import '../App.css';

function Game() {
    const [name, setName] = useState("");

    function getinfo() {
        console.log(name);

        // 서비스 키 설정
        const serviceKey = "RmrPVGf%2Bcm9bzys3S5%2BFgZSfzv15i6e%2FsUXPxoqzbsRqAdUfSuLIQmOgCFb72%2BJ0q2o6wjUToUtJkTPFo8cv4Q%3D%3D"
        
        // API 요청 URL 구성
        const url = 'http://apis.data.go.kr/1180000/DaejeonNationalCemetery/Burialinfo042';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
        queryParams += '&' + encodeURIComponent('name') + '=' + encodeURIComponent(name);

        // XMLHttpRequest 객체 생성
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url + queryParams, true);

        // 요청 완료 후 처리
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 응답 데이터가 성공적으로 수신되었을 때
                console.log('Response:', xhr.responseText);
            } else if (xhr.readyState === 4) {
                // 오류 발생 시
                console.error('Error:', xhr.statusText);
            }
        };

        // 요청 전송
        xhr.send();
    }

    return (
        <div className="back">
            <input 
                type="text" 
                placeholder="이름을 입력해주세요" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            />
            <button onClick={getinfo}>버튼</button>
        </div>
    );
}

export default Game;
