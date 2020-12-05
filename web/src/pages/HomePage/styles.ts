import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E2E2E2;
    text-align: center;


    h2{
        font-weight: 400;
    }
`;

export const Mensagem = styled.div`

    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#FC54B9,#715AFF);
    flex-direction: column;
    padding: 1em 0 1em 0;
    border-radius: 0 5em 5em 0;
    margin: 1em 0;

    h2,p{
        text-align: center;
        font-size: 20px;
        font-weight: 400;
    }

    @media(min-width: 750px){
        margin-top: 0;
        width: 70%;
        padding: 1em 0 3em 0;
        margin-bottom: 4em;

        h2,p{
        font-size: 40px;
        }
    }
  
`

export const Produtos = styled.div`

`
