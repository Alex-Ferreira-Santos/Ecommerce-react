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

        .heart{
            opacity: 100;
            width: 2.5em;
            height: 2em;
            right: 0.5em;
            top: 0.5em;
            background-color: #e5e5e5;
            border-radius: 50%;
            transition: 0;
        }
    }

    .heart{
        opacity: 0;
        position: absolute;
        transition: .3s;
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
        height: 19em;

        &:hover{
            height: 23em;
            .descricao{
                display: inherit;
                height: auto;
                color: gray;
            }
        }
    }
    
`;
