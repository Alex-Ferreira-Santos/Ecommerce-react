import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #fff;
    width: 50%;
    height: auto;
    padding: 1em;
    border-radius: 20px;
    transition: .3s;
    

    &:hover{
        transform: translateY(-4px) translateX(-5px);
        box-shadow: 5px 4px 4px #000000;
    }

    #img{
        max-width: 100%;
        height: auto;
    }

    .descricao{
        display: none;
    }

    .info{
        text-align: left;
        
        .preco{
            font-size: 25px;
            color: #794CA6;
        }
    }

    @media (min-width:750px){
        width: 19em;
        


        &:hover{
            height: 23em;
            .descricao{
                display: inherit;
                position: absolute;
                height: auto;
                color: gray;
            }
        }
    }
    
`;
