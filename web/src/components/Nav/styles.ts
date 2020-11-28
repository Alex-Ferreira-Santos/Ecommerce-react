import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        margin: 0.5em 0.2em;
    }

    nav{
        background-color: #A57FF6;
        width: 100%;
        display: flex;
        z-index: 1;
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
        margin: 0 0.4em;
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
        margin-left: 38%;
        top: 2.3em;
    }

    @media(min-width:500px){
        .ola{
            margin-left: 45%;
        }
    }

    @media(min-width:750px){
        nav{
            justify-content: flex-start;
            align-items: flex-start;
            
        } 

        h1{
            margin: 0.8em;
        }

        .ola{
            right: 10%;
        }
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

    @media(min-width:750px){
        width: 50%;
        position: relative;
        top: 1em;
        margin-left: 1em;
    }
`;

export const Pages = styled.div`
    background-image: linear-gradient(#A57FF6, #7FBDF6);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    transform: translateY(-230px);
    transition-duration: 0.3s;
    z-index: 0;


    &.active{
        transform: translateY(0px);
        
        
    }

    .pages:hover{
        width: 100%;
        background-color: white;
        color: black;
    }

    a{
        color: white;
        text-decoration: none;
        width: 100%;
        text-align: center;
    }
`
