import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Win =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(
        <div>
            <p>Sen: {state.score[0]}, bilgisayar: {state.score[1]}</p>
            <p>Kazandın :), sen {state.choices} seçtin, bilgisayar {state.computer} seçti! </p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}

export const Lose =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(
        <div>
            <p>Sen: {state.score[0]}, bilgisayar: {state.score[1]}</p>
            <p>Kaybettin :(, sen {state.choices} seçtin, bilgisayar {state.computer} seçti!</p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}

export const Draw =()=>{
    const navigate=useNavigate();
    const {state}=useLocation();

    return(

        <div>
            <p>Sen: {state.score[0]}, bilgisayar: {state.score[1]}</p>
            <p>Berabere, sen {state.choices} seçtin, bilgisayar {state.computer} seçti!</p>
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