import styled from "styled-components";
import React from 'react';
import setaplay from "../assets/img/seta_play.png";
import vira from "../assets/img/seta_virar.png";
import errou from "../assets/img/icone_erro.png";



export default function Cards ({Num, pergunta, resposta}) {

const [qualFace, setQualFace] = React.useState(1);
const [cor, setCor]=React.useState();

function FaceUm (){
    return (
        <Perguntafechada onClick={()=>setQualFace(2)}>
            <p>Pergunta {Num}</p>
            <img src={setaplay} />
        </Perguntafechada>

    )
}

function FaceDois () {
    return(
        <StyledPerguntaAberta onClick={()=> setQualFace(2)}>
            <p>{pergunta}</p>
            <img src={vira} />
        </StyledPerguntaAberta>
    )

}

function FaceTres () {
    return (
        <StyledResposta onClick={()=> setQualFace(3)}>
            <p>{resposta}</p>

                 <StyledButton onClick={()=>mudaCor(setCor('red'))}>Não lembrei</StyledButton>
                    <button onClick={()=>mudaCor(setCor('yellow'))}>Quase não lembrei</button>
                    <button onClick={()=>mudaCor(setCor('green'))}>Zap!</button>
            
        </StyledResposta>
    )
}

function FaceQuatro () {
    return(
        <Perguntafechada onClick={()=>setQualFace(2)}>
        <p>{cor} Pergunta {Num}</p>
        <img src={setaplay} />
    </Perguntafechada>
    )
}

function mudaCor(cor){
    setQualFace(cor);
    
}




switch (qualFace) {
    case 1:
        return (<FaceUm />);
    case 2:
        return (<FaceDois />);

    case 3:
        return (<FaceTres />);



    case 'red':
        return (
        <FaceQuatro>
            <img src={errou} />
            </FaceQuatro>
        )

     
}
}



const Perguntafechada= styled.div `
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    `

    const StyledPerguntaAberta = styled.div `
     width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    `

    const StyledResposta = styled.div `
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `

const StyledButton= styled.button `
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    
    `
