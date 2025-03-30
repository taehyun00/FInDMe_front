import React, { useState } from "react";
import '../App.css';

function Game() {
    const [name, setName] = useState("");

    function getinfo() {
        console.log(name);


        const serviceKey = "RmrPVGf%2Bcm9bzys3S5%2BFgZSfzv15i6e%2FsUXPxoqzbsRqAdUfSuLIQmOgCFb72%2BJ0q2o6wjUToUtJkTPFo8cv4Q%3D%3D"
        
        const url = 'http://apis.data.go.kr/1180000/DaejeonNationalCemetery/Burialinfo042';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
        queryParams += '&' + encodeURIComponent('name') + '=' + encodeURIComponent(name);


        const xhr = new XMLHttpRequest();
        xhr.open('GET', url + queryParams, true);

 
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 응답 데이터가 성공적으로 수신되었을 때
                console.log('Response:', xhr.responseText);
            } else if (xhr.readyState === 4) {
                // 오류 발생 시
                console.error('Error:', xhr.statusText);
            }
        };

        
        xhr.send();
    }

    return (
        <div className="main">
        <div className="main_back">
            <input className="main_input" 
                type="text" 
                placeholder="이름을 입력해주세요" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            />
            <button onClick={getinfo}>find me</button>
        </div>
        </div>
    );
}

export default Game;
