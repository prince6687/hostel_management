import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import TranslateIcon from '@material-ui/icons/Translate';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CachedIcon from '@material-ui/icons/Cached';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import Dashboard from '@material-ui/icons/Dashboard';


const DashBoardRoomDetails = () => {
    const [open, setOpen] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const [hosteldetails, setHostel] = useState({});
    const [admin, setAdmin] = useState("");
    const [address,setAddress] = useState(""); 
    const user = sessionStorage;
    let date = new Date();
    let day = date.getDate();
    console.log(day);
    useEffect(() => {
        axios.post("http://localhost:8000/hostel/getdetails", {
            user
        }).then(res => {
            console.log(res.data);
            console.log(res.data) ;
            setHostel(res.data[0]);
            setAdmin(res.data[1]);
            var add ;
            if(res.data[0].hostel)
            {
                 add = res.data[0].hostel.hostelId.address ;
            }
            else add = res.data[0].address ;
            add = add.replaceAll(',','') ;
            add = add.replaceAll('  ',' ') ;
            add = add.replaceAll(' ','+') ;
            console.log(add) ;
            setAddress(add) ;
        }).catch(err => console.log(err));
    }, [])

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
                        <div className="admin mobile-only">
                            Student
                        </div>
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
                            <div>
                                <DashboardIcon className="left-icon" />
                                Dashboard
                            </div>
                            <div className="mobile-only" onClick={() => setSideBar(true)}>
                                <MenuIcon className="left-icon-mob" />
                            </div>
                        </div>
                        <Link to="/user/dashboard/home" className="left-item">
                            <HomeIcon className="left-icon" />
                            Home
                        </Link>
                        <Link to="/user/dashboard/room/details" className="left-item active">
                            <RoomIcon className="left-icon" />
                            Room details
                        </Link>
                        <Link to="/user/dashboard/room/change" className="left-item">
                            <CachedIcon className="left-icon" />
                            Room Change
                        </Link>
                        <Link to="/user/dashboard/canteen" className="left-item">
                            <EmojiFoodBeverageIcon className="left-icon" />
                            Hostel Canteen
                        </Link>
                        <Link to="/user/dashboard/guest-house/req" className="left-item">
                            <AirlineSeatIndividualSuiteIcon className="left-icon" />
                            Guest House
                        </Link>
                        <Link to="/user/dashboard/contact-admin" className="left-item">
                            <SupervisorAccountIcon className="left-icon" />
                            Contact Admin
                        </Link>
                        <Link to="/user/dashboard/profile" className="left-item">
                            <AccountCircleIcon className="left-icon" />
                            My profile
                        </Link>
                    </Left>
                    <Right>
                        <div className="head not-mobile">
                            <h2>Student Dashboard</h2>
                            <div className="left-links">
                                <p>Dashboard > Room Details</p>
                                <button>
                                    <AddCircleIcon className="icon" />
                                    Create New
                                </button>
                            </div>
                        </div>
                        <div className="general">
                            <div className="grand-card">
                                <div className="card-top">
                                    <p>Room Details</p>
                                    <MoreVertIcon className="icon" />
                                </div>
                                {hosteldetails.hostel ? (
                                    <div className="details">
                                         <div className="detail">
                                            <p className="cat">College :</p>
                                            <p className="res"> <b>{hosteldetails.hostel.hostelId.college}</b></p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">1. Room No. :</p>
                                            <p className="res"> {hosteldetails.hostel.roomno}</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">2. Hostel Name :</p>
                                            <p className="res"> {hosteldetails.hostel.hostelId.name}</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">3. Room Type : </p>
                                            <p className="res">Normal</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">4. Belongs to PWD student : </p>
                                            <p className="res">No</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">5. Room owner(s) : </p>
                                            <p className="res">{admin}</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">6. Fees (PM) : </p>
                                            <p className="res">{hosteldetails.hostel.fees}</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">7. Staying From : </p>
                                            <p className="res">14 February, 2020</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">8. Due Payment : </p>
                                            <p className="res">{!sessionStorage.getItem("amount") ? (<span>0</span>) : (<span>{sessionStorage.getItem("amount")}</span>)}</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">9. Total Room Services : </p>
                                            <p className="res">{31 - day} left out of 31</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">10. Room Change: </p>
                                            <p className="res">Allowed</p>
                                        </div>
                                        <button className="leave-room-btn">
                                            Leave Room
                                        </button>
                                        <div className="room-images">
                                            <img src="https://bizimages.withfloats.com/tile/5e4b9c8fce486d0001593c52.jpg" alt="" />
                                            <img src="https://m.media-amazon.com/images/I/71DXmXYIXFL._SL1133_.jpg" alt="" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="details">
                                        <div className="detail">
                                            <p className="cat">College :</p>
                                            <p className="res"> <b>Jadavpur University</b></p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">1. Room No. :</p>
                                            <p className="res"> --</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">2. Hostel Name :</p>
                                            <p className="res"> Not allocated yet</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">3. Room Type : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">4. Belongs to PWD student : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">5. Room owner(s) : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">6. Fees (PM) : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">7. Staying From : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">8. Due Payment : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">9. Total Room Services : </p>
                                            <p className="res">--</p>
                                        </div>
                                        <div className="detail">
                                            <p className="cat">10. Room Change: </p>
                                            <p className="res">--</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="multi-cards">
                                {/* code */}
                                <div className="card">
                                    <img src="https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/default/3-512.png" alt="" />
                                    <div className="text">
                                        <div className="top">Your Hostel</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/${address}`} className="link">View Address</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://www.nicepng.com/png/full/352-3526091_vector-icon-of-an-airplane-gloucester-road-tube.png" alt="" />
                                    <div className="text">
                                        <div className="top">Find Airport</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/airport+near+${address}`} className="link">View Nearest Airport</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJ7CDsOepm3PNLGC2918je2zk9BZZtyVt6xDG4FA32__pKru5Lq3WSf0NRGTuHvj0SZY&usqp=CAU" alt="" />
                                    <div className="text">
                                        <div className="top">Find Railway Station</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/railwaystation+near+${address}`} className="link">View Nearest Railway Station</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://cdn0.iconfinder.com/data/icons/health-icons-rounded/110/Hospital-512.png" alt="" />
                                    <div className="text">
                                        <div className="top">Find Hospital</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/hospitals+near+${address}`} className="link" >View Nearest Hospital</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/medicine-510-768425.png" alt="" />
                                    <div className="text">
                                        <div className="top">Find Pharmacy Store</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/pharmacy+near+${address}`} className="link">View Nearest Pharmacy Store</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://www.millastellan.com/assets/icons/others.png" alt="" />
                                    <div className="text">
                                        <div className="top">Find Stationary</div>
                                        <a target="_blank" href={`https://www.google.co.in/maps/search/stationery+near+${address}`} className="link">View Nearest Stationary</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Right>
                </div>
            </Container>

            <SideBar className={`${sideBar ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <SbComponentOne>
                    <Link to="/user/dashboard/home">Home</Link>
                    <Link to="/user/dashboard/room/details">Room Details</Link>
                    <Link to="/user/dashboard/room/change">Room Change</Link>
                    <Link to="/user/dashboard/contact-admin">Contact Admin</Link>
                    <Link to="/user/dashboard/canteen">Canteen</Link>
                    <Link to="/user/dashboard/guest-house/req">Guest House</Link>
                    <Link to="/user/dashboard/profile">My profile</Link>
                </SbComponentOne>
                <RemoveSideBar onClick={(e) => setSideBar(false)}>
                    <ClearIcon style={{ cursor: "pointer", fontSize: '1.5rem', fill: 'white' }} />
                </RemoveSideBar>
            </SideBar>
        </>
    )
}

export default DashBoardRoomDetails

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

        @media only screen and (max-width: 600px){
            justify-content: flex-start;
            flex-direction: column;
        }
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

            .admin{
                font-size: 0.55rem;
                margin-left: 5px;
                text-transform: uppercase;
                color: white;
                letter-spacing: 0.1rem;
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

        div{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
        }

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
        text-decoration: none;

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



    @media only screen and (max-width: 600px){
        width: 100%;
        background-color: #333;
        display: flex;
        flex-direction: column;
        

        .left-header{
            font-size: 1rem;
            padding: 10px;
            margin-bottom: 0;
            justify-content: space-between;
            background-color: #5c63a9;

            .left-icon{
                fill: white;
                margin-right: 10px;
                font-size: 1.4rem;
            }

            .left-icon-mob{
                fill: white;
                font-size: 2rem;
            }

            div{
                color: white;
                font-size: 1rem;
                display: flex;
                align-items: center;
            }
        }

        .left-item{
            display: none;
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
        justify-content: space-between;
        /* align-items: center; */

        .grand-card{
            min-height: 512px;
            width: 74%;
            background-color: white;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
            border-radius: 10px;
            margin-right: 1%;
            padding: 1rem;

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

            .details{
                margin-top: 30px;

                .detail{
                    display: flex;
                    align-items: center;
                    font-size: 0.9rem;
                    margin-bottom: 10px;

                    .cat{
                        font-weight: 600;
                    }

                    .res{
                        font-weight: 200;
                        margin-left: 10px;
                        font-size: 0.85rem;
                    }
                }

                .leave-room-btn{
                    font-size: 0.9rem;
                    border: none;
                    background-color: #d56060;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                }

                .room-images{
                    display: flex;
                    margin-top: 30px;

                    img{
                        height: 140px;
                        border-radius: 10px;
                        margin-right: 5px;
                    }
                }
            }
        }

        .multi-cards{
            height: 520px;
            width: 25%;
            display: flex;
            flex-direction: column;
            padding-right: 10px;

            .card{
                width: 100%;
                height: 77px;
                background-color: white;
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
                border-radius: 10px;
                margin-bottom: 10px;
                margin-right: 1%;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                img{
                    height: 90%;
                }

                .text{
                    flex: 1;
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    
                    .top{
                        font-size: 0.9rem;
                    }
                    .link{
                        font-size: 0.7rem;
                    }
                }
            }
        }


        
    }



    @media only screen and (max-width: 600px){
        flex: 1;

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
        padding: 0.6rem 0.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        

        .grand-card{
            height: auto;
            width: 100%;
            background-color: white;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
            border-radius: 10px;
            margin-right: 0%;
            padding: 0.5rem;

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

            .details{
                margin-top: 20px;

                .detail{
                    display: flex;
                    align-items: center;
                    font-size: 0.8rem;
                    margin-bottom: 10px;

                    .cat{
                        font-weight: 600;
                    }

                    .res{
                        font-weight: 200;
                        margin-left: 10px;
                        font-size: 0.8rem;
                    }
                }
            }
        }

        .multi-cards{
            height: auto;
            width: 100%;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            padding-right: 0px;

            .card{
                width: 100%;
                height: 80px;
                background-color: white;
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
                border-radius: 10px;
                margin-bottom: 10px;
                margin-right: 1%;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                img{
                    height: 90%;
                }

                .text{
                    flex: 1;
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    
                    .top{
                        font-size: 0.9rem;
                    }
                    .link{
                        font-size: 0.7rem;
                    }
                }
            }
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


const SideBar = styled.div`
/* index.css */
    position: fixed;
`

const SbComponentOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

        a{
            text-decoration: none;
            color: white;
            /* border: 1px solid white; */
            background-color: #6f78c3;
            border-radius: 5px;
            padding: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
            margin-bottom: 0.75rem;
            width: 80vw;
            font-size: 0.95rem;
            text-align: center;
            
            &:hover{
                background-color: white;
                color: #333;
                transition-duration: 0.3s;
            }
        }
`

const JoinNow = styled.div`
    cursor: pointer;
    margin-top: 5rem;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`

const RemoveSideBar = styled.div`
position: absolute;
top: 1rem;
right: 1rem;
`