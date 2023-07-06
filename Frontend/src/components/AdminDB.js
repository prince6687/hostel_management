import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


const AdminDB = () => {
    const [open, setOpen] = useState(false);

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
                            <div className="btn" onClick={() => setOpen(true)}>
                                <AddCircleIcon className="icon" />
                                <>
                                    List your hostel
                                </>
                            </div>
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
                <div className="main">
                    <Left>
                        <div className="left-header">
                            <DashboardIcon className="left-icon"/>
                            Dashboard
                        </div>
                        <div className="left-item active">
                            <HomeIcon className="left-icon"/>
                            Home
                        </div>
                        <div className="left-item">
                            <AssignmentIcon className="left-icon"/>
                            applications
                        </div>
                        {/* <div className="left-item">
                            <VpnKeyIcon className="left-icon"/>
                            Change Password
                        </div> */}
                        <div className="left-item">
                            <AddIcon className="left-icon"/>
                            Add Hostel 
                        </div>
                        <div className="left-item">
                            <EmailIcon className="left-icon"/>
                            Indox
                        </div>
                        <div className="left-item">
                            <SupervisorAccountIcon className="left-icon"/>
                            Access logs
                        </div>
                        <div className="left-item">
                            <AccountCircleIcon className="left-icon"/>
                            My profile
                        </div>
                    </Left>
                    <Right>
                        <div className="head">
                            <h2>Admin Dashboard</h2>
                            <div className="left-links">
                                <p>Dashboard > Home</p>
                                <button>
                                    <ChatBubbleIcon className="icon"/>
                                    View Inbox
                                </button>
                            </div>
                        </div>
                        <div className="general">
                            <div className="card">
                                <div className="card-top">
                                    <p>Total Rooms</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>92</h1>
                                    <p>Rooms both genders combined</p>
                                </div>
                                <div className="desc">This data can be changed when new hostels are built.
                                <a> Show Room Details</a></div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Rooms Left</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>37</h1>
                                    <p>Rooms both genders combined</p>
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.
                                <a> Show Detailed</a></div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Total Inbox</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>9</h1>
                                    <p>Queries sent by students</p>
                                </div>
                                <div className="desc">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.
                                    <a> Open Inbox</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>New Applications</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>12</h1>
                                    <p>Hostel Room related applications</p>
                                </div>
                                <div className="desc">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.
                                    <a> Open Applications</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Add Hostel or Rooms</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <img src="http://iess.pk//assets/images/hostle.png" alt="" />
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque. 
                                <a> Append Now</a></div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Occupied Room Details</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <img src="https://icon-library.com/images/list-icon-png/list-icon-png-27.jpg" alt="" />
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque. 
                                <a> Contact Now</a></div>
                            </div>
                        </div>
                    </Right>
                </div>
            </Container>
        </>
    )
}

export default AdminDB

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    .main{
        display: flex;
        justify-content: space-between;
        flex: 1;
    }

    .together{
        display: flex;
        align-items: center;
    }

    a{
        color: cornflowerblue;
        cursor: pointer;
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

        border-bottom: 1px solid #ebdfdf;

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

const Left = styled.div`
    width: 320px;
    background-color: #333;
    display: flex;
    flex-direction: column;

    .left-header{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        background-color: #585353;
        padding: 10px;
        margin-bottom: 25px;

        .left-icon{
            fill: white;
            margin-right: 10px;
            font-size: 2rem;
        }
    }

    .left-item{
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        color: white;
        font-weight: 300;
        padding: 0.75rem 1rem;
        background-color: #0000001f;
        margin: 0.2rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: grey;

        .left-icon{
            fill: grey;
            font-size: 1.25rem;
            margin: -4px 10px 0 0;
        }
    }

    
    .left-item:hover{
        background-color: #0000006b;
        transition-duration: 250ms;
        color: white;

        .left-icon{
            fill: white;
        }
    }

    .active{
        background-color: #b9aaaa69;
        color: white;
        
        .left-icon{
            fill: white;
        }
    }

    .active:hover{
        background-color: #b9aaaa69;
    }

`

const Right = styled.div`
    flex: 1;
    background-color: #edf1f5;

    .head{
        padding: 16px 24px;
        box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-weight: 400;
            font-size: 1.25rem;
        }

        .left-links{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                font-size: 0.8rem;
                color: grey;
                margin-right: 15px;
            }

            button{
                display: flex;
                align-items: center;
                padding: 5px 10px;
                font-size: 0.8rem;
                border: none;
                background-color: cornflowerblue;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                
                .icon{
                    fill: white;
                    margin-right: 5px;
                }
            }
        }
    }

    .general{
        padding: 1.2rem;
        padding-right: 0;

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .card{
            width: 32%;
            height: 250px;
            background-color: white;
            margin-bottom: 10px;
            margin-right: 1%;
            border-radius: 10px;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .card-top{
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 1rem;
                }

                .icon{
                    cursor: pointer;
                }

            }

            .card-mid{
                text-align: center;
                h1{
                    color: #cf7574;
                    font-size: 5rem;
                    line-height: 5rem;
                }
                p{
                    color: #521616;
                    font-size: 0.8rem;
                }

                img{
                    height: 7rem;
                }
            }

            .desc{
                font-size: 0.7rem;
                color: grey;
                text-align: center;
            }
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