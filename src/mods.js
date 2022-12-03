import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import tas from './image/tas.png';
import makas from './image/makas.png';
import kagıt from './image/kagıt.png';

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function calculate(chosen,computer){
    console.log(chosen);
    console.log(computer);
    if (chosen===computer){
        return '/draw'
    }
    else if (chosen==='makas'&&computer==='tas'){
        return '/lose'
    }
    else if (chosen==='makas'&&computer==='kagıt'){
        return '/win'
    }
    else if (chosen==='tas'&&computer==='kagıt'){
        return '/lose'
    }
    else if (chosen==='tas'&&computer==='makas'){
        return '/win'
    }
    else if (chosen==='kagıt'&&computer==='makas'){
        return '/lose'
    }
    else if (chosen==='kagıt'&&computer==='tas'){
        return '/win'
    }
    else {
        return '/error'
    }
}

export const Mod1 =()=>{
    const navigate=useNavigate();
    let choices = ['tas', 'kagıt', 'makas'];
    let chosen;
    let computer=choices[randomNum(0,2)];

    return(
        <div>
            <p>Mod1</p>
            <img src={tas}  alt="logo" onClick={()=>{
                chosen='tas';
                navigate(calculate(chosen,computer), {state: {chosen,computer} });
            }}/>
            <img src={kagıt}  alt="logo" onClick={()=>{
                chosen='kagıt';
                navigate(calculate(chosen,computer), { state: {chosen,computer} });
            }}/>
            <img src={makas}  alt="logo" onClick={()=>{
                chosen='makas';
                navigate(calculate(chosen,computer), { state: {chosen,computer} });
            }}/>,

            <div>
                <Button onClick={()=>navigate('/win')}>Tas</Button>
                <Button onClick={()=>navigate('/')}>Home</Button>
            </div>

        </div>
    )
}

export const Mod2 =()=>{
    const navigate=useNavigate();
    return(
        <div>
            <p>Mod2</p>
            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>
    )
}