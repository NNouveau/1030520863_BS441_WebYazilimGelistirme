import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

export const Home =()=>{
    const navigate=useNavigate();
    return(
        <div>
            <p>Oyun Modu Seçiniz</p>
            <Button onClick={()=>navigate('mod1')}>Oyun Modu 1</Button>
            <Button onClick={()=>navigate('mod2')}>Oyun Modu 2</Button>
        </div>
    )
}