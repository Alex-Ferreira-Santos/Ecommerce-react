import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    footer {
        width: 100%;
        background: #84A6FF;
        position: absolute;
        bottom: 0;
        padding-bottom: 1em;
    }

    h2{
        color: #fff;
    }

    .nav{
        text-decoration: none;
        color: white;
        width: 100%;
        transition: .3s;

        &:hover{
            background-color: white;
            color: black;
        }
    }

    @media(min-width:750px){
        text-align: initial;

        footer{
            display: block;
        }

        h1{
            background: orange;
            padding: 2em;
            display: inline-block;
            
        }

        nav{
            display: inline-block;
            width: 60%;
            background: blue;
        }

        .nav{
            width: 100%;
        }
    }
`;

export const Novidades = styled.div`
    background: #651AF1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1em;

    input::-webkit-input-placeholder {
        text-align: center;
    }

    input:-moz-placeholder { /* Firefox 18- */
        text-align: center;  
    }

    input::-moz-placeholder {  /* Firefox 19+ */
        text-align: center;  
    }

    input:-ms-input-placeholder {  
        text-align: center; 
    }

    
    
    h2{
        font-weight: 400;
    }

    .inputs{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 100%;
    }

    #nome{
        margin-left: 1em;
        width: 30%;
        background-color: #F5F8FA;
        border: 2px solid #000;
        transition: .3s;

        &:focus{
            border: 2px solid #E98325;
        }
    }

    #email{
        margin-right: 1em;
        width: 50%;
        background-color: #F5F8FA;
        border: 2px solid #000;
        transition: .3s;

        &:focus{
            border: 2px solid #E98325;
        }
    }

    #submit{
        color: white;
        background-color: #000;
        width: 95%;
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: #000;
            background: #fff;
        }
    }

    input{
        border-radius: 10px;
        margin: 0.5em;
        border: none;
        text-align: center;
        outline: none;
    }

    @media(min-width:750px){
        width: 100vw;
        position: absolute;
        justify-content:center;
        height: 70px;
        flex-direction: row;
        padding: 0 1em;


        input{
            margin: 0;
        }

        h2{
            text-align:center;
        }

        .inputs{
            justify-content: initial;
            margin: 0;
        }

        form{
            display: flex;
        }

        #nome{
            width: 11.4375em;
            padding: 0.5em 0;
        }

        #email{
            width: 18.1425em; 
            margin-left: 1em;      
        }

        #submit{
            width: 9.25em;

        }
    }

    @media(min-width:1024px){
        width: auto;
        padding: 1em;
        right: 1em;
    }
`;
