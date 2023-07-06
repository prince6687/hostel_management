import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState,useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ExploreIcon from '@material-ui/icons/Explore';
import ClearIcon from '@material-ui/icons/Clear';
import logo from './logo.png'

const LandingPage = () => {
    const [constFooter, setConstFooter] = useState(true);
    const [open, setOpen] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [univ, setUniv] = useState("JU");
    const [showChat, setShowChat] = useState(false);
    const [college,setColleges] = useState([]) ;
    useEffect(() => {
        axios.get("http://localhost:8000/getall/institutes").then(res => {
            setColleges(res.data);
            console.log(res.data)
        })
            .catch(err => console.log(err));
    }, [])
    const onSignin = () => {
        console.log(firstname, lastname, email, password, phone, univ);
        axios.post("http://localhost:8000/register", {
            "name": firstname + lastname,
            "email": email,
            "password": password,
            "phone": phone,
            "college": univ
        }).then(res => {
            if (res.status == 200) {
                alert(res.data);
                setSignUp(false)
            }
        })
            .catch((err) => alert(err));
    }
    const onlogin = () => {
        axios.post("http://localhost:8000/login", { "email": email, "password": password }).then(res => {
            if (res.status == 200) {
                const { id, name, email, institute, iscomplete } = res.data;
                sessionStorage.setItem("id", id);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("institute", institute);
                sessionStorage.setItem("iscomplete", iscomplete);
                axios.post("http://localhost:8000/application/status/user", {
                    "email": sessionStorage.getItem("email"),
                    "user": sessionStorage.getItem("id")
                }).then(res => {
                    sessionStorage.setItem("Application", res.data.status);
                    window.location.href = "/user/dashboard/home";
                })
            }
        }).catch((err) => alert(err))
    }
    return (
        <>

            {
                open ? (

                    <CustomModal>
                        <div className="touch-outside" onClick={() => setOpen(false)}>

                        </div>
                        <div className="container">
                            <div className="modalHeader">
                                <h3></h3>
                                <h3>Message from Hosterr</h3>
                                <CloseIcon style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
                            </div>
                            <div className="desc">
                                This feature will be enabled soon, stay tunned.
                            </div>
                        </div>
                    </CustomModal>
                ) : (
                    <></>
                )
            }
            <BaapContainer>
                {
                    showChat ? (
                        <div className="dark-bg-effect" onClick={() => setShowChat(false)}>
                            <ChatContainer>
                                <div className="top">
                                    <div className="tgher">
                                        <img src={logo} alt="" />
                                        <h1>Hosterr</h1>
                                    </div>
                                    <ClearIcon className="icon" onClick={() => setShowChat(false)} />
                                </div>
                                <div className="powered-by">
                                    Hosterr Services, powered by Dialogflow.
                                </div>
                                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/96b4e058-f359-41ce-b76c-d7e50eeb442b"></iframe>
                            </ChatContainer>
                        </div>
                    ) : (
                        <ChatInitaiter onClick={() => setShowChat(true)}>
                            <img src="https://www.jing.fm/clipimg/full/120-1205146_chat-icon-png-image-circle.png" alt="" />
                        </ChatInitaiter>
                    )
                }
            </BaapContainer>
            <Container>

                <PageOne>
                    <PageOneHeader>
                        <div className="one">
                            <a href="/" className="title">
                                Hosterr
                            </a>
                            <div className="together">
                                <button className="lang" onClick={() => setOpen(true)}>
                                    <TranslateIcon className="icon-one" />
                                    EN
                                </button>
                                <Link to="/admin" className="btn" onClick={() => setOpen(true)}>
                                    <ExploreIcon className="icon" />
                                    <>
                                        Explore as Admin
                                    </>
                                </Link>
                                <div className="mobile-only">
                                    <MenuIcon className="m-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="two not-mobile">
                            Help us grow by giving information about your university hostel details.
                            <a href="/" className="two-link">Know more*</a>
                        </div>
                    </PageOneHeader>

                    <PageOneContainer>
                        <Title>
                            <Fade bottom>
                                <div className="title">
                                    Get ready to get <br />
                                    your hostel room.
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="benifit mobile-only">Room customisation, on your schedule.</div>
                            </Fade>
                            <span>Explore</span>
                            <div className="not-mobile">
                                <Fade bottom>
                                    <img className="img not-mobile" src="https://mazipan.github.io/login-page-css/undraw-login.1df4c833.svg" alt="" />
                                </Fade>
                            </div>
                        </Title>


                        {
                            signUp ? (
                                <LoginForm>
                                    <Fade bottom>
                                        <div className="title">Sign up now</div>
                                    </Fade>
                                    <Fade>
                                        <div className="container">
                                            <div className="input-type-2-container">
                                                <input type="text" className="input input-type-2" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                                                <input type="text" className="input input-type-2" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                                            </div>
                                            <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <input type="number" className="input" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                                            {/* <div className="input dropdown-clone" onChange={(e) => setUniv(e.target.value)} >
                                                <>
                                                    Jadavpur University
                                                </>
                                                <ArrowDropDownIcon />
                                            </div> */}
                                            {college?(
                                            <select onChange={(e)=>setUniv(e.target.value)}>
                                                <option value="none" selected disabled hidden>Select your University</option>
                                                {
                                                college.map(item => <option value={item.name}>{item.name} </option>)
                                                }
                                            </select>)
                                            :<select onChange={(e)=>setUniv(e.target.value)}></select>
                                            }
                                            <p className="text not-mobile">
                                                I also agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.
                                            </p>

                                            <div className="login-opt mobile-only">
                                                Already have an account?
                                                <a onClick={() => setSignUp(false)} className="login-opt-link">Login</a>
                                            </div>


                                            <div className="together">
                                                <button className="sub-btn" onClick={onSignin}>
                                                    SignUp to Browse
                                                </button>

                                                <div className="login-opt not-mobile">
                                                    Already have an account?
                                                    <a onClick={() => setSignUp(false)} className="login-opt-link">Login</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </LoginForm>

                            ) : (
                                <LoginForm>
                                    <Fade bottom>
                                        <div className="title">Sign In now</div>
                                    </Fade>

                                    <Fade>
                                        <div className="container">
                                            <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <div className="input dropdown-clone">
                                                <>
                                                    Jadavpur University
                                                </>
                                                <ArrowDropDownIcon />
                                            </div>

                                            <p className="text not-mobile">
                                                By proceeding, I agree to Uber's Terms of Use and acknowledge that I have read the Privacy Policy.
                                                I also agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.
                                            </p>
                                            <p className="text mobile-only">
                                                By proceeding, I agree to Uber's Terms of Use and acknowledge that I have read the Privacy Policy.
                                            </p>
                                            <div className="login-opt mobile-only" style={{ margin: "0px" }}>
                                                But incase you don't have an account?
                                                <a onClick={() => setSignUp(true)} className="login-opt-link">Login</a>
                                            </div>
                                            <br />
                                            <a href="/" className="forgot-password">
                                                Forgot your password ?
                                            </a>

                                            <div className="together">
                                                <button className="sub-btn" onClick={onlogin}>
                                                    Log In to Browse
                                                </button>

                                                <div className="login-opt not-mobile">
                                                    Don't have an account?
                                                    <a onClick={() => setSignUp(true)} className="login-opt-link">Sign Up</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </LoginForm>
                            )
                        }

                    </PageOneContainer>


                    {
                        constFooter ? (<PageOneFooter>
                            <p>
                                We use cookies to improve user experience and analyze website traffic. By clicking “Accept“, you agree to our website's cookie use as described in our Cookie Policy. You can change your cookie settings at any time by clicking “Preferences.”
                            </p>
                            <div>
                                <button className="accept-btn btn" onClick={() => setConstFooter(false)}>Accept</button>
                                <button className="accept-btn btn" onClick={() => setConstFooter(false)}>Preferences</button>
                            </div>
                        </PageOneFooter>) : (
                            <></>
                        )
                    }


                    <DancerDownIcon>
                        <ExpandMoreIcon style={{ fontSize: '1.5rem', fill: '#333' }} />
                    </DancerDownIcon>
                </PageOne>

                <PageTwo>
                    <div className="title">
                        HOW IT WORKS
                    </div>
                    <div className="container-box">
                        <Fade bottom>
                            <div className="container-item">
                                <div className="how_it_works_item_left1 not-mobile">
                                    <div></div>
                                </div>
                                <div className="how_it_works_item_right">
                                    <div className="how_it_works_item_right_left1">

                                    </div>
                                    <div className="how_it_works_item_right_right">
                                        <div className="rr_titie">
                                            Create your object
                                        </div>
                                        <div className="rr_desc">
                                            Provide and Upload Relevant University details to register yourself to our website. Now you are all set to login and manage everything about your Hostel with just a click!!
                                        </div>
                                        <div className="rr_remark">
                                            No calls, no mails and no annoying mass inspections.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="container-item">
                                <div className="how_it_works_item_left2 not-mobile">
                                    <div></div>
                                </div>
                                <div className="how_it_works_item_right">
                                    <div className="how_it_works_item_right_left2">

                                    </div>
                                    <div className="how_it_works_item_right_right">
                                        <div className="rr_titie">
                                            Connection to administrator
                                        </div>
                                        <div className="rr_desc">
                                            We dont't leave your hand just after you just Book you hostel, you can submit queries to be addressed by your Institute admin, you are provided essential places nearest to your hostel, a dedicated Chat Bot to your help and many such helping hands....
                                        </div>
                                        <div className="rr_remark">
                                            {/* No calls, no mails and no annoying mass inspections. */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="container-item">
                                <div className="how_it_works_item_left3 not-mobile">
                                    <div></div>
                                </div>
                                <div className="how_it_works_item_right">
                                    <div className="how_it_works_item_right_left3">

                                    </div>
                                    <div className="how_it_works_item_right_right">
                                        <div className="rr_titie">
                                            Hostel Allotment
                                        </div>
                                        <div className="rr_desc">
                                            One stop to manage everything about your Hostel. You can Book your hostel, Change your current hostel, Book a Guest House, Check status of canteens in your institute and many more ...
                                        </div>
                                        <div className="rr_remark">
                                            No more paperwork during the tour. All documents digitally and collected in one place.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>






                    </div>

                </PageTwo>

                <PageThree>
                    <div className="pg3container">
                        <div className="left content">
                            <div>
                                <Fade bottom>
                                    <h1 className="red">Hosterr</h1>
                                </Fade>
                                <Fade bottom>
                                    <h1>Admin</h1>
                                </Fade>
                                <Fade bottom>
                                    <p>Top-to-bottom data and analytics. Easy to handle. Only on Hosterr.</p>
                                </Fade>
                                <Fade bottom>
                                    <a href="/admin">Explore</a>
                                </Fade>
                            </div>
                        </div>
                        <div className="content">
                            <img src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq" alt="" />
                        </div>
                    </div>
                </PageThree>

                <PageFour>
                    <div className="pg3container">
                        <div>
                            <Fade bottom>
                                <h1>Have a House for Rent?</h1>
                            </Fade>
                            <Fade bottom>
                                <p>Hosterr provides you with a platform to connect your PGs with college hostels, and to take payments without any time waste!
                                </p>
                            </Fade>
                            <Fade bottom>
                                <a href="/connect/business">Explore Hosterr Business</a>
                            </Fade>
                        </div>
                        <img src="https://media.istockphoto.com/photos/locator-mark-of-map-and-location-pin-or-navigation-icon-sign-on-blue-picture-id1304677392?b=1&k=20&m=1304677392&s=170667a&w=0&h=jmwbIQpYtweHd7or5cN44ysUV6fGYIeGH9m3Vn1A32w=" alt="" />
                    </div>
                </PageFour>
                {/* code */}


                <PageThreeFooter>
                    <div className="top">
                        <p>
                            connect with us
                        </p>
                        <input type="email" placeholder="Email Address" />
                        <div className="social-icons">
                            <a className="social-icon">
                                <GitHubIcon style={{ fill: "white", fontSize: '1.2rem' }} />
                            </a>
                            <a className="social-icon">
                                <EmailIcon style={{ fill: "white", fontSize: '1.2rem' }} />
                            </a>
                            <a className="social-icon">
                                <InstagramIcon style={{ fill: "white", fontSize: '1.2rem' }} />
                            </a>
                            <a className="social-icon">
                                <FacebookIcon style={{ fill: "white", fontSize: '1.2rem' }} />
                            </a>

                        </div>
                    </div>

                    <div className="middle">
                        <div className="left">
                            <div className="left-content">
                                <div className="title">
                                    Hosterr
                                </div>
                                <div className="points">
                                    <a href="/" className="link">About us</a>
                                    <a href="/" className="link">Team</a>
                                    <a href="/" className="link">Our Mission</a>
                                    <a href="/" className="link">Contact</a>
                                    <a href="/" className="link">Future Vision</a>
                                </div>
                            </div>

                            <div className="left-content">
                                <div className="title">
                                    General
                                </div>
                                <div className="points">
                                    <a href="/" className="link">Terms and Conditions</a>
                                    <a href="/" className="link">Data protection</a>
                                    <a href="/" className="link">Trust and Security</a>
                                </div>
                            </div>

                            <div className="left-content">
                                <div className="title">
                                    Account
                                </div>
                                <div className="points">
                                    <a href="/" className="link">Login</a>
                                    <a href="/" className="link">Create account</a>
                                    <a href="/" className="link">Request API access</a>
                                </div>
                            </div>

                        </div>
                        <div className="right">
                            <Fade bottom>
                                <h1>Hosterr.</h1>
                            </Fade>
                            <Fade bottom>
                                <span>
                                    A smart management system for university hostels.
                                </span>
                            </Fade>
                        </div>
                    </div>

                    <div className="bottom">
                        A Devfolio hackathon product, All rights reserved 2022
                    </div>

                </PageThreeFooter>

            </Container>
        </>
    )
}

export default LandingPage



const BaapContainer = styled.div`
    @media only screen and (max-width: 600px){
        .dark-bg-effect{
            height: 100vh;
            width: 100vw;
            background-color: #00000075;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
        }
    }
`

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;

    .together{
        display: flex;
        align-items: center;
    }

    

    a{
        color: cornflowerblue;
    }

    .mobile-only{
        visibility: hidden;
    }
    
    @media only screen and (max-width: 600px){
        .mobile-only{
            visibility: visible;
        }
        .not-mobile{
            display: none !important;
            /* visibility: hidden; */
            /* height: 0; */
            /* width: 0; */
            /* overflow: hidden; */
        }
    }

`

const PageOne = styled.div`
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
`

const PageOneHeader = styled.div`
    position: relative;
    
    .one{
        height: 64px;
        background-color: #7c83d3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        
        .title{
            font-size: 24px;
            color: white;
            font-weight: 700;
            text-decoration: none;
        }

        .icon-one{
            fill: white;
            font-size: 1.2rem;
            margin-right: 6px;
        }

        .lang{
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            background-color: transparent;
            border: none;
            margin-right: 20px;
            color: white;
            margin-top: 5px;
            cursor: pointer;
            padding: 8px 15px;
            border-radius: 15px;
        }

        .lang:hover{
            background-color: #a1a6dd;
            transition-duration: 250ms;
        }
        
        .btn{
            font-size: 0.7rem;
            background-color: #f3f5f7;
            color: #333;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 20px;
            font-weight: 500;

            display: flex;
            align-items: center;

            .icon{
                fill: #333;
                margin-right: 5px;
                font-size: 1.2rem;
            }
        }
    }


    .two{
        height: 42px;
        background-color: #f3f5f7;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;

        .two-link{
            margin-left: 5px;
        }
    }

    @media only screen and (max-width: 600px) {
        .one{
            height: 54px;
            padding: 0 1rem;
            
            .title{
                font-size: 22px;
                color: white;
                font-weight: 700;
                text-decoration: none;
            }

            
            .lang{
                visibility: hidden;
            }

            .btn{
                visibility: hidden;
                
            }

            .m-icon{
                fill: white;
                font-size: 2rem;
            }
        }


        .two{
            height: 42px;
            background-color: #f3f5f7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;

            .two-link{
                margin-left: 5px;
            }
        }
  
    }
`

const PageOneContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    a{
        cursor: pointer;
    }

    @media only screen and (max-width: 600px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1.5rem;
    }
`

const Title = styled.div`
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    /* padding: 0 10%;     */

    .title{
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3.25rem;
    }
    
    .benifit{
        margin: 1rem 0 0.5rem 0;
        font-weight: 200;
    }

    span{
        padding: 10px;
        margin-top: 5vh;
        font-weight: 200;
        font-size: 0.8rem;
        border: 1px solid black;
        display: none;
    }

    .img{
        height: 370px;
        width: 350px;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 600px){
        .title{
            font-size: 2.15rem;
            font-weight: 500;
            letter-spacing: 0.05rem;
            line-height: 2.15rem;
        }

        img{
            height: 0px;
            width: 0px;

        }
    }
`

const LoginForm = styled.div`
    .container{
        width: 460px;
    }

    .title{
        font-size: 1.35rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    select{
        width: 100%;
        display: block;
        background-color: #eeeeee;
        padding: 1rem;
        font-size: 0.8rem;
        border: none;
        outline: none;
        margin-bottom: 10px;
    }

    .input{
        width: 100%;
        display: block;
        background-color: #eeeeee;
        padding: 1rem;
        font-size: 0.9rem;
        border: none;
        outline: none;
        margin-bottom: 15px;
    }

    .input-type-2-container{
        display: flex;
        justify-content: space-between;
    }

    .input-type-2{
        width: 220px;
        
    }

    .dropdown-clone{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .text{
        font-size: 0.75rem;
        font-weight: 200;
        color: grey;
    }

    
    
    .sub-btn{
        padding: 12px;
        border: none;
        background-color: #9a6dbd;
        color: white;
        margin-top: 20px;
        cursor: pointer;
        display: inline;
    }
    
    .sub-btn:hover{
        background-color: #7c83d3;
        transition-duration: 250ms;
    }

    .login-opt{
        font-size: 0.75rem;
        font-weight: 200;
        color: grey;
        margin: 15px 0 0 15px;
    }

    .login-opt-link{
        font-weight: 300;
        margin-left: 5px;
        text-decoration: none;
        letter-spacing: 0.05rem;
    }

    .forgot-password{
        font-weight: 300;
        margin-left: 5px;
        text-decoration: none;
        font-size: 0.75rem;
        letter-spacing: 0.05rem;
    }   
    
    @media only screen and (max-width: 600px){
        .container{
            width: 100%;
            overflow: hidden;
        }

        .title{
            font-size: 1.35rem;
            font-weight: 500;
            margin: 1rem 0;
        }

        .input{
            /* width: 100%; */
            /* display: block; */
            padding: 0.75rem;
            font-size: 0.85rem;
            margin-bottom: 10px;
        }

        .input-type-2-container{
            justify-content: space-between;
        }

        .input-type-2{
            width: 49%;
            
        }

        .dropdown-clone{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }

        .text{
            font-size: 0.75rem;
            font-weight: 200;
            color: grey;
        }

        
        
        .sub-btn{
            padding: 12px;
            margin-top: 20px;
            cursor: pointer;
            display: inline;
            width: 100%;
            border-radius: 5px;
        }
        

        .login-opt{
            color: grey;
            margin: 15px 0 0 0;
        }

        .login-opt-link{
            font-weight: 300;
            margin-left: 5px;
            text-decoration: none;
            letter-spacing: 0.05rem;
        }

        .forgot-password{
            font-weight: 300;
            margin-left: 5px;
            text-decoration: none;
            font-size: 0.75rem;
            letter-spacing: 0.05rem;
        }
    }
`

const PageOneFooter = styled.div`
    height: 60px;
    background-color: #eaeaf1;
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 10;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;


    p{
        font-size: 0.7rem;
        width: 70%;
    }

    .btn{
        padding: 8px 15px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
        font-size: 0.65rem;
        display: inline;
    }

    .accept-btn{
        margin-right: 10px;
    }

    .reject-btn{

    }

    @media only screen and (max-width: 600px){
        display: none;
    }

`

const DancerDownIcon = styled.div`
    position: absolute;
    bottom: 65px;
    width: 98%;
    display: grid;
    place-items: center;
    animation: animateDown infinite 1.5s;


    @keyframes animateDown{
        0%, 20%, 50%, 80%, 100%{
            transform: translateY(0);
        }
        40%{
            transform: translateY(5px);
        }
        60%{
            transform: translateY(3p);
        }
    }

    @media only screen and (max-width: 600px){
        bottom: 10px;
    }
`

const PageTwo = styled.div`
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    background-color: #f7f7f77d;
    padding: 60px 2rem;

    .title{
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 3.25rem;
        text-align: center;
        width: 400px;
        margin: auto;
        border-bottom: 1px solid black;
        margin-bottom: 30px;
    }

    .container-box{
        height: 912px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .container-item{
        height: 304px;
        width: 950px;

        display: flex;
        margin: 0 auto;
        justify-content: center;

        .how_it_works_item_left1 {
            width: 99px;
            background-image: url('https://www.housy.de/images/circle_1_landlord.svg');
            background-repeat: no-repeat;
            background-position: -4px 0;
        }

        .how_it_works_item_left2 {
            width: 99px;
            background-image: url('https://www.housy.de/images/circle_2_landlord.svg');
            background-repeat: no-repeat;
            background-position: -4px 0;
        }

        .how_it_works_item_left3 {
            width: 99px;
            background-image: url('https://www.housy.de/images/circle_3_landlord.svg');
            background-repeat: no-repeat;
            background-position: -4px 0;
        }

        .how_it_works_item_left1 div {
            margin: 0 auto;
            width: 0;
            background: none;
            height: calc(100% - 96px);
            margin-top: 96px;
            border-left: 1px solid #4393f9;
        }

        .how_it_works_item_left2 div {
            margin: 0 auto;
            width: 0;
            background: none;
            height: calc(100% - 96px);
            margin-top: 96px;
            border-left: 1px solid #4393f9;
        }
        
        .how_it_works_item_right {
            width: 825px;
            margin-left: 35px;
            display: flex;
            position: relative;
            border: 1px solid rgba(151, 151, 151, 0.29);
            border-radius: 6px;
            margin-bottom: 45px;


            .how_it_works_item_right_left1 {
                min-width: 323px;
                background-image: url('https://www.housy.de/images/how_it_works_item_img.svg');
                background-repeat: no-repeat;
                background-position: center;
            }

            .how_it_works_item_right_left2 {
                min-width: 323px;
                background-image: url('https://www.housy.de/images/man-1.svg');
                background-repeat: no-repeat;
                background-position: center;
            }

            .how_it_works_item_right_left3 {
                min-width: 323px;
                background-image: url('https://www.housy.de/images/how_it_works_item_img_3.svg');
                background-repeat: no-repeat;
                background-position: center;
            }

            .how_it_works_item_right_right {
                width: 100%;
                padding: 0 30px 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .rr_titie{
                    font-size: 1.25rem;
                    font-weight: 500;
                }

                .rr_desc{
                    font-size: 0.75rem;
                    font-weight: 200;
                    color: grey;
                    margin: 20px 0;
                }

                .rr_remark{
                    font-size: 0.85rem;
                    font-weight: 500;
                }
            }
        }

        .how_it_works_item_right:before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background: #f7f7f77d;
            top: 40px;
            left: -8px;
            border: 1px solid rgba(151, 151, 151, 0.29);
            transform: rotate(45deg);
            border-radius: 2px;
            border-top: none;
            border-right: none;
        }
    }   



    @media only screen and (max-width: 600px){
        /* min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
        background-color: #f7f7f77d;
        padding: 60px 2rem; */

        .title{
            /* font-size: 1.5rem; */
            /* font-weight: 600; */
            /* line-height: 3.25rem; */
            /* text-align: center; */
            width: 100%;
        }

        .container-box{
            height: auto;
            /* display: flex; */
            flex-direction: column;
            justify-content: space-between;
            /* align-items: center; */
        }
        
        .container-item{
            height: 80%;
            width: 100%;

            /* display: flex; */
            flex-direction: column;
            margin: 0 auto;
            /* justify-content: center; */
            align-items: center;

            .how_it_works_item_left1 {
                width: 99px;
                /* background-image: url('https://www.housy.de/images/circle_1_landlord.svg'); */
                /* background-repeat: no-repeat; */
                background-position: -4px 0;
            }

            .how_it_works_item_left2 {
                width: 99px;
                background-image: url('https://www.housy.de/images/circle_2_landlord.svg');
                background-repeat: no-repeat;
                background-position: -4px 0;
            }

            .how_it_works_item_left3 {
                width: 99px;
                background-image: url('https://www.housy.de/images/circle_3_landlord.svg');
                background-repeat: no-repeat;
                background-position: -4px 0;
            }

            .how_it_works_item_left1 div {
                margin: 0 auto;
                width: 0;
                background: none;
                height: calc(100% - 96px);
                margin-top: 96px;
                border-left: 1px solid #4393f9;
            }

            .how_it_works_item_left2 div {
                margin: 0 auto;
                width: 0;
                background: none;
                height: calc(100% - 96px);
                margin-top: 96px;
                border-left: 1px solid #4393f9;
            }
            
            .how_it_works_item_right {
                width: 100%;
                margin-left: 0;
                display: flex;
                flex-direction: column;
                /* position: relative; */
                /* border: 1px solid rgba(151, 151, 151, 0.29); */
                /* border-radius: 6px; */
                width: 100%;
                margin-left: 20px;
                margin-right: 20px;
                padding: 10px;
                text-align: center;
                margin-bottom: 10px;


                .how_it_works_item_right_left1 {
                    min-height: 134px;
                    min-width: 100%;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    background-size: contain;
                }

                .how_it_works_item_right_left2 {
                    min-height: 134px;
                    min-width: 100%;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    background-size: contain;
                }

                .how_it_works_item_right_left3 {
                    min-height: 134px;
                    min-width: 100%;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    background-size: contain;
                }

                .how_it_works_item_right_right {
                    padding: 10px;
                }

            }

            

            .how_it_works_item_right:before {
                display: none;
            }
        }

    }
`

const PageThree = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    padding: 20px 0 0 0;

    .pg3container{
        height: 90%;
        width: 90%;
        border-radius: 20px;
        background-color: #f7f7f7;
        display: flex;
        overflow: hidden;

        .left{
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 3rem;
        }

        .content{
            width: 50%;
            overflow: hidden;

            h1{
                font-size: 5rem;
                display: inline;
            }

            .red{
                color: #6e8ab5;
            }


            img{
                width: 100%;
            }

            p{
                font-size: 1rem;
                font-weight: 200;
                width: 90%;
                margin-bottom: 2rem;
            }

            a{
                font-weight: 200;
                padding: 10px 20px;
                background-color: #c19774;
                color: white;
                border-radius: 5px;
                text-decoration: none;
            }
        }
    }


    @media only screen and (max-width: 600px){
        min-height: 100vh;
        /* width: 100vw; */
        /* display: grid; */
        /* place-items: center; */
        /* padding: 20px 0; */

        .pg3container{
            /* height: 90%; */
            /* width: 90%; */
            /* border-radius: 20px; */
            /* background-color: #f7f7f7; */
            display: flex;
            flex-direction: column;
            /* overflow: hidden; */
            align-items: center;

            .left{
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 3rem;
            }

            .content{
                width: 90%;
                overflow: visible;

                h1{
                    font-size: 2.5rem;
                    display: inline;
                }

                .red{
                    color: #6e8ab5;
                }


                img{
                    width: 100%;
                }

                p{
                    font-size: 1rem;
                    font-weight: 200;
                    width: 90%;
                    margin-bottom: 2rem;
                }

                a{
                    font-weight: 200;
                    padding: 10px 20px;
                    background-color: #c19774;
                    color: white;
                    border-radius: 5px;
                    text-decoration: none;
                }
            }
        }
    }

`

const PageFour = styled.div`
    height: 30vh;
    min-height: 300px;
    width: 100vw;
    display: grid;
    place-items: center;
    padding: 20px 0;
    margin-bottom: 10vh;

    /* codes */

    .pg3container{
        height: 90%;
        width: 90%;
        border-radius: 20px;
        background-color: #f7f7f7;
        display: flex;
        overflow: hidden;
        position: relative;

        img{
            border-radius: 20px;
            margin: 10px;
        }

        
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            width: 100%;
            padding: 0 20px;

            h1{
                font-size: 3rem;
                color: #b36c6c;
            }

            p{
                font-weight: 200;
                max-width: 90%;
                margin-bottom: 10px;
                font-size: 0.9rem;
                /* text-align: center; */
            }
        }

        
    }


    @media only screen and (max-width: 600px){
        min-height: 70vh;
        /* width: 100vw; */
        /* display: grid; */
        /* place-items: center; */
        /* padding: 20px 0; */

        .pg3container{
            height: 100%;
            width: 90%;
            border-radius: 20px;
            background-color: #f7f7f7;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;

            img{
                border-radius: 20px;
                margin: 10px;
                flex: 1;
                margin-top: 20px;
            }

            
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                /* align-items: center; */
                width: 100%;
                padding: 0 20px;

                h1{
                    font-size: 2rem;
                    color: #b36c6c;
                }

                p{
                    font-weight: 200;
                    max-width: 90%;
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                    /* text-align: center; */
                }
            }
            }
    }

`


const PageThreeFooter = styled.div`
    height: 560px;
    background-color: #2d2d2d;
    padding-top: 36px;
    position: relative;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    /* margin-bottom: 60px; */
    display: flex;
    flex-direction: column;


    .top{
        width: 100vw;
        height: 100px;
        margin: 0 auto;
        border-bottom: 1px solid #333;
        display: flex;
        align-items: center;
        justify-content: center;
        
        p {
            color: white;
            font-weight: 300;
            margin: 0 20px;
            font-size: 0.8rem;
        }

        input{
            padding: 15px;
            background-color: #333;
            outline: none;
            width: 400px;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 0.8rem;
        }

        .social-icons {
            display: flex;
            justify-content: space-between;
            height: 50px;
            align-items: center;
            margin-left: 5%;
        }

        .social-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border: solid 2px rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            margin-left: 10px;
            cursor: pointer;
        }

        .social-icon:hover{
            border: solid 2px white;
            transition-duration: 250ms;
        }
    }

    .middle{
        display: flex;
        justify-content: space-between;
        padding: 1rem 5rem; 
        margin-top: 50px;

        .left{
            display: flex;
            justify-content: space-between;

            .left-content{
                margin-right: 80px;

                .title{
                    color: white;
                    text-transform: uppercase;
                    font-size: 1rem;
                    font-weight: 600;
                    letter-spacing: 0.1rem;
                }

                .points{
                    margin: 1rem 0;
                    display: flex;
                    flex-direction: column;
                }

                .link{
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.3);
                    text-decoration: none;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                .link:hover{
                    color: #ffffff99;
                    transition-duration: 250ms;
                }
            }
        }

        .right{
            h1{
                font-size: 4rem;
                color: white;
                text-align: right;
            }

            span{
                color: white;
                font-weight: 100;
            }
        }
    }

    .bottom{
        height: 60px;
        font-size: 0.75rem;
        display: grid;
        place-items: center;
        color: white;
        font-weight: 200;
        background-color: #333;
        position: absolute;
        bottom: 0;
        width: 100vw;
    }


    @media only screen and (max-width: 600px){
        height: 480px;
        padding-top: 36px;
        display: flex;
        flex-direction: column;
        padding-bottom: 120px;
        justify-content: space-between;


        .top{
            width: 100%;
            height: 150px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            
            p {
                font-weight: 200;
                margin-bottom: 5px;
                font-size: 0.7rem;
            }

            input{
                padding: 15px;
                width: 90%;
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 0.8rem;
            }

            .social-icons {
                margin-left: 0%;
            }

        }

        .middle{
            padding: 0; 
            margin-top: 30px;
            text-align: center;

            .left{
                display: none;
            }

            .right{
                display: grid;
                place-items: center;
                width: 80%;
                margin: auto;

                h1{
                    font-size: 3rem;
                    text-align: right;
                }

                span{
                    font-size: 0.9rem;
                }
            }
        }

        .bottom{
            height: 60px;
            font-size: 0.6rem;
            font-weight: 100;
            background-color: #333;
        }


    }

`

const CustomModal = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 100;

    .touch-outside{
        height: 100vh;
        width: 100vw;
        background-color: #00000087;
    }    

    .container{
        height: auto;
        width: 50vw;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 35vh;
        left: 25vw;
        padding: 1rem;

        .desc{
            font-size: 0.9rem;
            color: grey;
            font-weight: 300;
            margin: auto;
            margin-top: 1rem;
            text-align: center;
            width: 70%;
        }
    }

    .modalHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddcccc;
        padding: 0.6rem 0;
    }
`
const ChatContainer = styled.div`
    position: fixed;
    bottom: 80px;
    right: 20px;
    height: 70vh;
    width: 360px;
    background-color: white;
    border: 1px solid #ddcccc;
    border-radius: 20px;
    z-index: 10;
    overflow: hidden;

    iframe{
        height: 100%;
        width: 100%;
        border: none;
    }

    .top{
        position: absolute;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #1c2e4e;
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 10px;

        .tgher{
            display: flex;
            align-items: center;

            img{
                height: 2.6rem;
            }
        }

        h1{
            font-size: 1.8rem;
            color: #b1c6dd;
        }

        .icon{
            fill: white;
            font-size: 1.75rem;
            cursor: pointer;
        }
    }

    .powered-by{
        position: absolute;
        top: 80px;
        width: 100%;
        height: 30px;
        background-color: #fff3f3;
        z-index: 11;
        font-size: 0.7rem;
        padding: calc(15px - 0.35rem);
        color: grey;
    }


    @media only screen and (max-width: 600px){
        bottom: 20px;
        right: 5%;
        width: 90%;
        background-color: white;
        border: 1px solid #ddcccc;
        border-radius: 20px;
        z-index: 10;
        overflow: hidden;
    }
`

const ChatInitaiter = styled.div`
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: 70px;
    right: 10px;
    border-radius: 50%;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    z-index: 100;
    
    img{
        height: 50%;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px){
        bottom: 25px;
    }
`
{/*
 <div className="input-type-2-container">
                                            <div className="custom-select">
                                            <select onChange={(e)=>setGender(e.target.value)}>
                                                <option value="">Gender</option>
                                                <option value="Boys">Male</option>
                                                <option value="Girls">Female</option>
                                            </select>
                                        </div>
                                        
                                        <div className="custom-select">
                                            <select onChange={(e)=>setYear(e.target.value)}>
                                                <option value="">Year of study</option>
                                                <option value="UG 1">UG 1</option>
                                                <option value="UG 2">UG 2</option>
                                                <option value="UG 3">UG 3</option>
                                                <option value="UG 4">UG 4</option>
                                                <option value="PG 1">PG 1</option>
                                                <option value="PG 2">PG 2</option>
                                                <option value="PHD">PHD</option>
                                            </select>
                                        </div>
                            
                                            </div>
*/}