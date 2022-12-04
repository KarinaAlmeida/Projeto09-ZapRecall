import styled from "styled-components";
import React from 'react';
import setaplay from "../assets/img/seta_play.png";
import vira from "../assets/img/seta_virar.png";
import errou from "../assets/img/icone_erro.png";
import acertou from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";



export default function Cards ({Num, pergunta, resposta, contador, setContador}) {

const [qualFace, setQualFace] = React.useState(1);
const [qualCor, setQualCor]=React.useState('black') 


function FaceUm (){
    return (
        <Perguntafechada data-test="flashcard">
            <p data-test="flashcard-text">Pergunta {Num}</p>
            <img src={setaplay} data-test="play-btn" onClick={()=>setQualFace(2)}  />
        </Perguntafechada>

    )
}

function FaceDois () {
    return(
        <StyledPerguntaAberta data-test="flashcard">
            <p data-test="flashcard-text">{pergunta}</p>
            <img src={vira} data-test="turn-btn" onClick={()=> setQualFace(3)} />
        </StyledPerguntaAberta>
    )

}

function FaceTres () {
    return (
        <StyledResposta data-test="flashcard">
            <p data-test="flashcard-text">{resposta}</p>

                    <ContainerButton>
                    <StyledButton data-test="no-btn" cor="red" onClick={()=>mudaCor('red')}>Não lembrei</StyledButton>
                    <StyledButton data-test="partial-btn" cor="#FF922E" onClick={()=>mudaCor('#FF922E')}>Quase não lembrei</StyledButton>
                    <StyledButton data-test="zap-btn" cor="green" onClick={()=>mudaCor('green')}>Zap!</StyledButton>
                    </ContainerButton>

        </StyledResposta>
    )
}


function FaceQuatro() {
    if (qualCor==='red'){
        return(
            <Perguntarespondida cor={'red'} data-test="flashcard">
            <p data-test="flashcard-text"> Pergunta {Num}</p>
            <img data-test="no-icon" src={errou} />
        </Perguntarespondida>
        )
    } else if(qualCor==='#FF922E'){
        return(
            <Perguntarespondida cor={'#FF922E'} data-test="flashcard">
            <p data-test="flashcard-text"> Pergunta {Num}</p>
            <img data-test="partial-icon" src={quase} />
        </Perguntarespondida>
        )

}else if(qualCor==='green') {
    return(
        <Perguntarespondida cor={'green'} data-test="flashcard">
            <p data-test="flashcard-text" > Pergunta {Num}</p>
            <img data-test="zap-icon" src={acertou} />
        </Perguntarespondida>
    )
}
}

function mudaCor(cor) {
    setContador(contador+1) 
    setQualFace(4)
    setQualCor(cor)
}








switch (qualFace) {
    case 1:
        return (<FaceUm />);
    case 2:
        return (<FaceDois />);

    case 3:
        return (<FaceTres />);

    case 4:
    return (<FaceQuatro /> )

     
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
    const ContainerButton= styled.div`
       width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

const StyledButton= styled.button `
    width: 85px;
    height: 37px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    font-family: 'Recursive';
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${props=> props.cor};
    line-height: 14px;
    border: 1px solid ${props=> props.cor};
    padding:5px;
    margin-top: 30px;
    
    `




const Perguntarespondida = styled.div`
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
        text-decoration: line-through;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props=> props.cor};
    }

`
