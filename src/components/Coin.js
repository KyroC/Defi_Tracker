import { useParams } from 'react-router-dom';
import "./Coin.css";

function Coin() {
    let { coinName } = useParams();
    return(
        <div className="Coin">
            <a>{coinName}</a>
        </div>
    )
}
export default Coin;