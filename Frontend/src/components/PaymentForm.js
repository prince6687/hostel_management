import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import styled from 'styled-components'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#333",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#c4f0ff"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
            axios.post("http://localhost:8000/pay",{
                user:sessionStorage ,
                amount: sessionStorage.getItem("amount"),
                stripeToken: result.token.id
            }).then(res=>{
                console.log(res.data) ;
                //window.location.href = "/payment-gateway/success"
            }).catch(err => console.log(err)) ;
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className="btn">Proceed to Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
                </div>
            }

        </>
    )
}

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