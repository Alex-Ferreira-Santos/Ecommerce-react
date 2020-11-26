import styled from 'styled-components';

export const Container = styled.div`
    background-color: #A57FF6;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        margin: 0.5em 0.2em;
    }

    nav{
        width: 100%;
        display: flex;
    }

    .carrinho{
        width: 2em;
    }

    .burguer{
        width: 2em;   
    }

    
`;

export const Inputs = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    

    #pesquisa{
        border: none;
        padding-inline-start: 3px;
        border-radius: 20px 0 0 20px;
        outline: none;

        &:focus{
            box-shadow: 1px 1px 1px black;
        }
    }

    .search{
        border: none;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.5em;
        border-radius: 0 20px 20px 0;

    }

    .lupa{
        position:relative;
        right: 1em;
    }

    img{
        width: 1em;
        height: 1em;
    }
`;
