import styled from "styled-components";
import Cards from "./Cards"

export default function Perguntas ({contador, setContador}) {
    const cartas = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (
        <StyledCards>
    {cartas.map((item, index) => <Cards     Num={index + 1} pergunta={item.question} resposta={item.answer} contador={contador} setContador={setContador} ></Cards>
                                            
                )}
         </StyledCards>
    )

}

const StyledCards= styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 210px;
    `

