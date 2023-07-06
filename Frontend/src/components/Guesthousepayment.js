import React from 'react'
import styled from 'styled-components'
import StripeContainer from './StripeContainer' ;

const GuesthousePaymentGateway = () => {
    const amount = sessionStorage.getItem("amount") ;
    return (
        <Container>
            <PageOneHeader>
                <h1>Hosterr </h1>    
                <p>Payment </p>
            </PageOneHeader>
            <Main>
                <div className="pay">
                    <div className="txt">pay</div>
                    <div className="amt">{} INR</div>
                </div>
                <div className="detail">Payee Details</div>
                <input type="text" className="input" placeholder="Name"/>
                <input type="text" className="input" placeholder="Phone Number"/>
                <input type="text" className="input" placeholder="Email ID"/>

                <div className="detail">Card Details</div>
                <StripeContainer/>
                {/*
                <input type="text" className="input" placeholder="Card Number"/>
                <input type="text" className="three-input" placeholder="Expiry Date MM/YY"/>
                <input type="text" className="one-input" placeholder="CVV"/>
                */}


                <div className="desc">By clicking continue, i am agree with <a>Terms & Policy</a> </div>

                <img src="https://www.downloadclipart.net/large/major-credit-card-logo-png-image.png" alt="" className="end-logo-left" />
                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Stripe_logo%2C_revised_2016.png" alt="" className="end-logo" />
            </Main>
            
        </Container>
    )
}

export default GuesthousePaymentGateway

const Container = styled.div`
    
    
`
const PageOneHeader = styled.div`
    height: 60px;
    display: flex;
    background-color: cornflowerblue;
    align-items: center;
    justify-content: center;

    h1{
        color: white;
    }
    p{
        color: white;
        font-size: 0.8rem;
        margin-top: 5px;
        margin-left: 5px;
    }

    img{
        height: 80%;
    }
`

const Main = styled.div`
    position: relative;
    min-height: 620px;
    width: 35%;
    min-width: 350px;
    border: 1px solid #e5dede;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    border-radius: 10px;
    margin: 50px auto;
    background: white;
    padding: 1rem;
    padding-bottom: 80px;

    .pay{
        display: flex;

        .txt{
            font-size: 0.8rem;
            text-transform: uppercase;
            color: grey;
            margin-top: 0.5rem;
            margin-right: 5px;
            font-weight: 500;
        }

        .amt{
            font-size: 1.25rem;
            font-weight: 600;
            color: #001a6c;
        }
    }

    .detail{
        font-weight: 500;
        color: #001a6c;
        margin-top: 30px;
    }

    .input{
        display: block;
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #e5dede;
        border-radius: 5px;
        font-size: 0.85rem;
        outline: none;
    }

    .three-input{
        width: 62.5%;
        display: inline;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #e5dede;
        border-radius: 5px;
        font-size: 0.85rem;
        outline: none;
    }

    .one-input{
        margin-left: 2.5%;

        width: 35%;
        display: inline;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #e5dede;
        border-radius: 5px;
        font-size: 0.85rem;
        outline: none;
    }

    .btn{
        width: 100%;
        padding: 10px;
        background-color: #4b6faf;
        border: none;
        border-radius: 5px;
        color: white;
        margin: 20px 0;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
    }

    .btn:hover{
        background-color: #42629b;
        transition-duration: 250ms;
    }

    .desc{
        font-size: 0.65rem;
        color: #828282;
        text-align: center;
        
        a{
            color: cornflowerblue;
            cursor: pointer;
        }
    }

    .end-logo{
        height: 40px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .end-logo-left{
        height: 40px;
        position: absolute;
        bottom: 15px;
        left: 10px;
    }

`