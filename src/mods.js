import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import tas from './image/tas.png';
import makas from './image/makas.png';
import kagit from './image/kagıt.png';
import tasplus from './image/tasplus.png';
import kagitplus from './image/kağıtplus.png';
import makasplus from './image/makasplus.png';
import {useState} from "react";


function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}



export const Mod1 =()=>{
    const navigate=useNavigate();
    let tools = ['tas', 'kagıt', 'makas'];
    let choices;
    let computer=tools[randomNum(0,2)];

    return(
        <div>
            <p>Oyun Modu 1</p>
            <img src={tas}  alt="logo" onClick={()=>{
                choices='tas';
                let score=Calculate(choices,computer);
                navigate(result(score), {state: {choices,computer,score} });
            }}/>
            <img src={kagit}  alt="logo" onClick={()=>{
                choices='kagıt';
                let score=Calculate(choices,computer);
                navigate(result(score), {state: {choices,computer,score} });
            }}/>
            <img src={makas}  alt="logo" onClick={()=>{
                choices='makas';
                let score=Calculate(choices,computer);
                navigate(result(score), {state: {choices,computer,score} });
            }}/>,

            <div>
                <Button onClick={()=>navigate('/')}>Home</Button>
            </div>

        </div>
    )
}

let phase=0;

export const Mod2 =()=>{
    const navigate=useNavigate();
    const [visible,setVisible]=useState([false,false,false]);
    const [visibleplus,setVisibleplus]=useState([true,true,true]);
    const [choices,setChoices]=useState(['null','null']);
    let tools = ['tas', 'kagıt', 'makas'];
    let toolsplus = ['tas+', 'kagıt+', 'makas+'];
    let computer=[tools[randomNum(0,2)],toolsplus[randomNum(0,2)]];

    return(
        <div>
            <p>Oyun Modu 2</p>
            <div onMouseMove={()=>{
                if (phase===2){
                    setVisible([true,true,true]);
                    setVisibleplus(notIn(choices));
                }
                if(phase===3){
                    console.log(Calculate(choices,computer));
                    console.log("oyuncu: "+choices);
                    console.log("bilgisayar: "+computer);
                    let score=Calculate(choices,computer);
                    navigate(result(score), { state: {choices,computer,score} });
                    phase=0;
                }
            }}>

                <img src={tas} hidden={visible[0]}  alt="logo" onClick={()=>{
                    if (phase===0){
                        setChoices(prevState=>['tas',prevState[1]]);
                        phase++;
                    }
                    else if (phase===1){
                        setChoices(prevState=>[prevState[0],'tas']);
                        phase++;
                    }
                }}/>
                <img src={kagit} hidden={visible[1]} alt="logo" onClick={()=>{
                    if (phase===0){
                        setChoices(prevState=>['kagıt',prevState[1]]);
                        phase++;
                    }
                    else if (phase===1){
                        setChoices(prevState=>[prevState[0],'kagıt']);
                        phase++;
                    }
                }}/>
                <img src={makas} hidden={visible[2]} alt="logo" onClick={()=>{
                    if (phase===0){
                        setChoices(prevState=>['makas',prevState[1]]);
                        phase++;
                    }
                    else if (phase===1){
                        setChoices(prevState=>[prevState[0],'makas']);
                        phase++;
                    }
                }}/>
                <img src={tasplus} hidden={visibleplus[0]} alt="logo" onClick={()=>{
                    if (choices[0]==='tas'){
                        setChoices(prevState=>['tas+',prevState[1]]);
                        phase++;
                    }
                    else if(choices[1]==='tas'){
                        setChoices(prevState=>[prevState[0],'tas+']);
                        phase++;
                    }

                }}/>
                <img src={kagitplus} hidden={visibleplus[1]} alt="logo" onClick={()=>{
                    if (choices[0]==='kagıt'){
                        setChoices(prevState=>['kagıt+',prevState[1]]);
                        phase++;
                    }
                    else if(choices[1]==='kagıt'){
                        setChoices(prevState=>[prevState[0],'kagıt+']);
                        phase++;
                    }
                }}/>
                <img src={makasplus} hidden={visibleplus[2]} alt="logo" onClick={()=>{
                    if (choices[0]==='makas'){
                        setChoices(prevState=>['makas+',prevState[1]]);
                        phase++;
                    }
                    else if(choices[1]==='makas'){
                        setChoices(prevState=>[prevState[0],'makas+']);
                        phase++;
                    }
                }}/>

            </div>

            <Button onClick={()=>navigate('/')}>Ana Sayfa</Button>
        </div>

    )
}

function result(score){
    if(score[0]>score[1]){
        return '/win';
    }
    else if(score[0]<score[1]){
        return '/lose';
    }
    else if(score[0]===score[1]){
        return '/draw';
    }
    else{
        return '/error';
    }
}

function Calculate(choices,computer){
    let score=[0,0];
    if(choices.includes('tas+')){
        if (computer.includes('makas+')){
            score[0]+=1;
        }
        else if(computer.includes('makas')){
            score[0]+=2;
        }
    }
    if(choices.includes('kagıt+')){
        if (computer.includes('tas+')){
            score[0]+=1;
        }
        else if(computer.includes('tas')){
            score[0]+=2;
        }
    }
    if(choices.includes('makas+')){
        if (computer.includes('kagıt+')){
            score[0]+=1;
        }
        else if(computer.includes('kagıt')){
            score[0]+=2;
        }
    }
    if(choices.includes('tas')){
        if(computer.includes('makas')){
            score[0]+=1;
        }
    }
    if(choices.includes('kagıt')){
        if(computer.includes('tas')){
            score[0]+=1;
        }
    }
    if(choices.includes('makas')){
        if(computer.includes('kagıt')){
            score[0]+=1;
        }
    }
    if(computer.includes('tas+')){
        if (choices.includes('makas+')){
            score[1]+=1;
        }
        else if(choices.includes('makas')){
            score[1]+=2;
        }
    }
    if(computer.includes('kagıt+')){
        if (choices.includes('tas+')){
            score[1]+=1;
        }
        else if(choices.includes('tas')){
            score[1]+=2;
        }
    }
    if(computer.includes('makas+')){
        if (choices.includes('kagıt+')){
            score[1]+=1;
        }
        else if(choices.includes('kagıt')){
            score[1]+=2;
        }
    }
    if(computer.includes('tas')){
        if(choices.includes('makas')){
            score[1]+=1;
        }
    }
    if(computer.includes('kagıt')){
        if(choices.includes('tas')){
            score[1]+=1;
        }
    }
    if(computer.includes('makas')){
        if(choices.includes('kagıt')){
            score[1]+=1;
        }
    }
    return score;
}

function notIn(choices){
    var bools=[false,false,false];

    if(choices.includes('makas')&&choices.includes('kagıt')){
        bools[0]=true;
    }
    else if(choices.includes('tas')&&choices.includes('makas')){
        bools[1]=true;
    }
    else if(choices.includes('tas')&&choices.includes('kagıt')){
        bools[2]=true;
    }
    if (!choices.includes('makas')&&!choices.includes('kagıt')){
        bools[1]=true;
        bools[2]=true;
    }
    else if (!choices.includes('tas')&&!choices.includes('makas')){
        bools[0]=true;
        bools[2]=true;
    }
    else if (!choices.includes('tas')&&!choices.includes('kagıt')){
        bools[0]=true;
        bools[1]=true;
    }

    return bools;
}