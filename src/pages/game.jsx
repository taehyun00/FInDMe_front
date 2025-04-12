import React, { useState } from "react";
import '../App.css';

function Game() {
    const [name, setName] = useState("");

    async function getinfo() {
        console.log(name);
    
        const serviceKey = "RmrPVGf%2Bcm9bzys3S5%2BFgZSfzv15i6e%2FsUXPxoqzbsRqAdUfSuLIQmOgCFb72%2BJ0q2o6wjUToUtJkTPFo8cv4Q%3D%3D"
        
        const url = 'http://apis.data.go.kr/1180000/DaejeonNationalCemetery/Burialinfo042';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
        queryParams += '&' + encodeURIComponent('name') + '=' + encodeURIComponent(name);
    
        try {
            const response = await fetch(url + queryParams);
            const text = await response.text(); 
            console.log('Response Text:', text);
    
            if (response.ok) {
                const data = JSON.parse(text); 
                console.log('Response:', data);
            } else {
                console.error('Error:', response.statusText); //요청 가긴하는데 자꾸 에러남
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
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
                <button onClick={getinfo}>안장자 찾기</button>
            </div>
        </div>
    );
}

export default Game;
