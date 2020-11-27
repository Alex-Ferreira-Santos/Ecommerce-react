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

    .link{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu{
        
        cursor: pointer;
        border: none;
        background-color: transparent;
        margin-left: 0.8em;
        width: 40px;
        
    }

    .one,.two,.three{
        background-color: black;
        height: 5px;
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }

    .menu.open .one{
        transform: rotate(45deg) translate(7px,7px);
    }

    .menu.open .two{
        opacity: 0;
    }

    .menu.open .three{
        transform: rotate(-45deg) translate(8px,-9px);
    }

    .ola{
        position: absolute;
        margin-left: 40%;
        top: 2.2em;
    }
    
`;

export const Inputs = styled.div`

    display: flex;
    align-items: center;
    width:100%;
    
    


    #pesquisa{
        border: none;
        padding-inline-start: 3px;
        border-radius: 20px 0 0 20px;
        outline: none;
        width:100%;

        &:focus{
            border: 0.5px solid orange;
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
        outline: none;

        &:focus{
            border: 0.5px solid orange;
        }
    }

    .lupa{
        position:relative;
        right: 0.5em;
        cursor: pointer;
    }

    img{
        width: 1em;
        height: 1em;
    }
`;
