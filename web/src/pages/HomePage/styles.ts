import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E2E2E2;


`;

export const Mensagem = styled.div`
    display: flex;
    width: 80%;
    

    .mensagem{
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(#FC54B9,#715AFF);
        flex-direction: column;
        width: 80%;
    }
    
    .triangulo{
        border-image: linear-gradient(#FC54B9,#715AFF);
        border: 8em solid;
        border-right: 0;
    }
    
    h2,p{
        text-align: center;
        font-size: 40px;
        font-weight: 400;
    }

    
    
`
