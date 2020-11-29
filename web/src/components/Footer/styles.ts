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
        background: #84A6FF;
    }

    h2{
        color: #fff;
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
`;
