import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

export const Home =()=>{
    const navigate=useNavigate();
    return(
        <div style={{margin: '50px'}}>
            <p>Oyun Modu Seçiniz</p>
            <Button onClick={()=>navigate('mod1')}>Oyun Modu 1</Button>
            <Button onClick={()=>navigate('mod2')}>Oyun Modu 2</Button>
            <div>
                <p>Oyun Modu 1</p>
                <p>Klasik taş, kağıt, makas. Taş makası yener, Makas kağıdı yener, Kağıt taşı yener.</p>
            </div>
            <div>
                <p>Oyun Modu 2</p>
                <p>3 fazdan oluşur. 1. fazda oyuncu iki adet nesne seçer.</p>
                <p>2. fazda seçtiği nesnelerden istediğini geliştirir(+).</p>
                <p>3. fazda oyun oynanır. Geliştirdiği nesne normal nesnelere yenilmez.(Makas+ Taşa yenilmez)</p>
                <p>Geliştirilen nesneler kendi aralarında normal davranır.(Makas+ Kağıt+yı yenerek 1 puan alır.)</p>
                <p>Geliştirilen nesneler normal nesnelerden 2 puan alır.(Makas+ Kağıdı yenerek 2 puan alır.)</p>
                <p>El sonunda yüksek puan alan oyunu kazanır.</p>
            </div>
        </div>

    )
}