import React from 'react'
import styled from 'styled-components'


const PaymentSuccess = () => {
    return (
        <Container>
            <PageOneHeader>
                <h1>Hosterr </h1>    
                <p>Payment </p>
            </PageOneHeader>
            <Main>
                <div className="top">
                    <img src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif" alt="" />
                    <h1>Payment Successful</h1>
                </div>
                <h3 className="amt-paid">Thank you! Your payment of Rs.{sessionStorage.getItem("amount")} has been recieved.</h3>
                <div className="id"></div>
                <div className="redirected">Please wait! You are being redirected.</div>
                <div className="desc">Please contact us at 9306197822 or to hosteer177@gmail.com for any query.</div>
            </Main>
            
        </Container>
    )
}

export default PaymentSuccess

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
    min-height: 220px;
    margin: 20px auto;
    width: 50%;
    min-width: 350px;
    border: 1px solid #e5dede;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    position: relative;
    border-radius: 10px;
    background: white;
    padding: 1rem;
    padding-bottom: 80px;
    text-align: center;


    .top{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 70px;
        }

        h1{
            color: #78b33f;
            font-weight: 600;
            margin-left: 20px;

        }
    }

    .amt-paid{
        font-size: 1rem;
        margin: 10px 0 5px 0;
    }

    .id{
        font-size: 0.8rem;
        font-weight: 200;
    }

    .redirected{
        margin: 100px 0 10px 0;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .desc{
        font-weight: 500;
        font-size: 0.65rem;
        color: grey;
        margin: 0px 0 10px 0;
    }


`