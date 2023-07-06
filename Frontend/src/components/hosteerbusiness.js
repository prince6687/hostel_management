import React, { useEffect } from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ExploreIcon from '@material-ui/icons/Explore';
import ClearIcon from '@material-ui/icons/Clear';
import logo from './logo.png'

const ConnectBusiness = () => {
    const [document1, setDocument1] = useState("");
    const [document2, setDocument2] = useState("");
    const [document3, setDocument3] = useState("");
    const [constFooter, setConstFooter] = useState(true);
    const [open, setOpen] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [rooms, setRooms] = useState(0);
    const [food, setFood] = useState("No");
    const [univ, setUniv] = useState("JU");
    const [colleges, setColleges] = useState([]) ;
    const [file1,setFile1] = useState(null) ;
    const [file2,setFile2] = useState(null) ;
    const [file3,setFile3] = useState(null) ;
    const handleImage1 = (e) => {
        setFile1(e.target.files[0])
        setDocument1(e.target.files[0].name.substring(0, 24));
    }
    const handleImage2 = (e) => {
        console.log("Done") ;
        setFile2(e.target.files[0])
        setDocument2(e.target.files[0].name.substring(0, 24));
    }
    const handleImage3 = (e) => {
        setFile3(e.target.files[0])
        setDocument3(e.target.files[0].name.substring(0, 24));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/getall/institutes").then(res => {
            setColleges(res.data);
            console.log(res.data)
        })
            .catch(err => console.log(err));
    }, [])
    const onSubmit = ()=>{
        //comment
        console.log(name,email,address,phone,univ,rooms,food,file1,file2,file3)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email",email) ;
        formData.append("address",address) ;
        formData.append("phone",phone) ;
        formData.append("institute",univ) ;
        formData.append("rooms",rooms) ;
        formData.append("food",food) ;
        const files = [file1,file2,file3] ;
        
        files.forEach (file => {
            formData.append ('files', file);
        })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post("http://localhost:8000/connect/pgbusiness",formData, config)
        .then(res=> console.log(res.data)).then(err => console.log(err)) ;
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
            <Container>

                <PageOne>
                    <PageOneHeader>
                        <div className="one">
                            <a href="/" className="title">
                                Hosterr Business
                            </a>
                            <div className="together">
                                <Link to="/admin" className="btn" onClick={() => setOpen(true)}>
                                    <div className="images">
                                        <img src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg" alt="" />
                                        <img src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg" alt="" />
                                        <img src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg" alt="" />
                                    </div>
                                    <>
                                        Contact Supervisor
                                    </>
                                </Link>
                                <div className="mobile-only">
                                    <MenuIcon className="m-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="two not-mobile">
                            Help us grow by sharing our website referral links and get paid.
                            <a href="/" className="two-link">Know more*</a>
                        </div>
                    </PageOneHeader>

                    <Main>
                        <div className="form">
                            <h1>Connect Now</h1>
                            <input type="text" name="" id="" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                            <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="number" name="" id="" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" name="" id="" placeholder="Address of Rent Property" onChange={(e) => setAddress(e.target.value)} />
                            <input type="text" name="" id="" placeholder="Number of Rooms" onChange={(e) => setRooms(e.target.value)} />
                            <select>
                                <option value="none"  selected disabled hidden onChange={(e) => setFood(e.target.value)}>Food Service Available ?</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                            {colleges ? (
                                <select onChange={(e) => setUniv(e.target.value)}>
                                    <option value="none" selected disabled hidden>University</option>
                                    {
                                        colleges.map(item => <option value={item.name}>{item.name} </option>)
                                    }
                                </select>)
                                : <select onChange={(e) => setUniv(e.target.value)}></select>
                            }
                            <ImageUploadBox>
                                <img src="https://icon-library.com/images/free-pdf-icon/free-pdf-icon-14.jpg" alt="" />
                                <section className="close">
                                    <p className="top">{document1 == "" ? "Add documents in PDF" : `${document1} is selected`}</p>
                                    <input type="file" id="file-input" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleImage1(e)} />
                                    {
                                        document1 == "" ? (
                                            <label htmlFor="file-input" className="small">Click here to browse</label>
                                        ) : (
                                            <button onClick={() => setDocument1("")} className="small red">
                                                Remove
                                            </button>
                                        )
                                    }
                                </section>
                            </ImageUploadBox>
                            <ImageUploadBox>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png" alt="" />
                                <section className="close">
                                    <p className="top">{document2 == "" ? "Add Apartment Image 1" : `${document2} is selected`}</p>
                                    <input type="file" id="file-input1" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleImage2(e)} />
                                    {
                                        document2 == "" ? (
                                            <label htmlFor="file-input1" className="small">Click here to browse</label>
                                        ) : (
                                            <button onClick={() => setDocument2("")} className="small red">
                                                Remove
                                            </button>
                                        )
                                    }
                                </section>
                            </ImageUploadBox>
                            <ImageUploadBox>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png" alt="" />
                                <section className="close">
                                    <p className="top">{document3 == "" ? "Add Apartment Image 2" : `${document3} is selected`}</p>
                                    <input type="file" id="file-input2" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleImage3(e)} />
                                    {
                                        document3 == "" ? (
                                            <label htmlFor="file-input2" className="small">Click here to browse</label>
                                        ) : (
                                            <button onClick={() => setDocument3("")} className="small red">
                                                Remove
                                            </button>
                                        )
                                    }
                                </section>
                            </ImageUploadBox>
                            <button className="sub-btn" onClick={onSubmit}>Connect</button>
                        </div>
                        <img src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2020/Aug/12/full_photo/GR2-103838-451818.jpg" alt="" />
                        {/* code */}
                    </Main>


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
                </PageOne>


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

export default ConnectBusiness



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
        background-color: #df5c5c;
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
            background-color: #e19898c7;
            color: #fff;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 20px;
            font-weight: 500;

            display: flex;
            align-items: center;

            .images{
                display: flex;
                align-items: center;
                margin-right: 5px;

                img{
                    height: 1.5rem;
                    border-radius: 100px;
                    margin-left: -5px;
                }
            }

            .icon{
                fill: #333;
                margin-right: 5px;
                font-size: 1.2rem;
            }
        }

        .btn:hover{
            background-color: #e9c1c1a6;
            transition-duration: 250ms;
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

const Main = styled.div`
    min-height: 600px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img{
        height: 506px;
        margin: 10px 10px 10px 20px;
        border-radius: 10px;
        margin-top: 3.5rem;
    }

    select{
        width: 100%;
        display: block;
        background-color: #eeeeee;
        padding: 1rem;
        font-size: 0.8rem;
        border: none;
        outline: none;
        margin-bottom: 8px;
        border-radius: 10px;
    }

    .form{
        padding: 10px 5%;
        min-height: 550px;
        width: 700px;

        h1{
            font-size: 1rem;
            font-weight: 500;
            margin: 1rem 0;
        }

        input{
            width: 100%;
            display: block;
            background-color: #eeeeee;
            padding: 1rem;
            font-size: 0.8rem;
            border: none;
            outline: none;
            margin-bottom: 8px;
            border-radius: 10px;
        }

        .input-type-2-container{
            display: flex;
            justify-content: space-between;
        }

        .input-type-2{
            width: 220px;
            
        }

        .sub-btn{
            width: 100%;
            border-radius: 10px;
            padding: 10px;
            color: white;
            font-weight: 500;
            font-size: 0.8rem;
            background-color: #cd6968;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }
            

    }
`
const ImageUploadBox = styled.div`
    margin-bottom: 8px;
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    background-color: #eeeeee;
    border-radius: 10px;
    display: flex;
    align-items: center;

    img{
        height: 80%;
        margin: 0;
        margin-right: 10px;
    }

    .close{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        input{
            display: none;
        }

        .top{
            font-size: 0.85rem;
        }

        .small{
            font-size: 0.7rem;
            color: cornflowerblue;
            cursor: pointer;
        }

        .red{
            color: red;
            border: none;
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
