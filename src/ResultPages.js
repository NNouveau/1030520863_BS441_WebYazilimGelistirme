import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Win =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(
        <div>
            <p>Kazandın :), sen {state.chosen} seçtin, bilgisayar {state.computer} seçti! </p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}

export const Lose =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(
        <div>
            <p>Kaybettin :(, sen {state.chosen} seçtin, bilgisayar {state.computer} seçti!</p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}

export const Draw =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(

        <div>
            <p>Berabere, sen {state.chosen} seçtin, bilgisayar {state.computer} seçti!</p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}

export const Error =()=>{
    const navigate=useNavigate();

    return(
        <div>
            <p>Bir şeyler ters gitti :(</p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}