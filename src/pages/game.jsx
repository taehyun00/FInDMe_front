import axios from "axios";
import '../App.css'
function Game(){

    return(
        function getinfo(){
        axios.get(
            'http://apis.data.go.kr/1180000/DaejeonNationalCemetery',
        );
        },
    

        <div className="back">
           <input type="text" placeholder="이름을 입력해주세요"></input>
        </div>
    )

}

export default Game;