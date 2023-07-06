import React from 'react'
import styled from 'styled-components'


const GetProfile = () => {
    return (
        <Container>
            <PageOneHeader>
                <h1>Hosterr </h1>
                <p>View Profile </p>
            </PageOneHeader>
            <div className="together">

                <Main>
                <div className="img-box">
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt="" />
                </div>
                
                    {/* <div className="img-box">
                        <img src="https://www.wikifame.org/thumber300+.php?ezimgfmt=ng%3Awebp%2Fngcb4%2Frs%3Adevice%2Frscb4-2&src=%2Fphotos%2F2174_poza1.jpg" alt="" />
                        <img src="https://www.id.ee/wp-content/uploads/2019/12/id-kaart-1024x646.jpg" alt="" />
                        <img src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-vhobga052m2s92bvuc37ca5556-20170807014459.Medi.jpeg" alt="" />
                    </div> */}

                    <div className="detail">Basic Details</div>
                    <div className="point">
                        <p>1. Name : </p>
                        <span>Mark Zuckerburg</span>
                    </div>
                    <div className="point">
                        <p>2. Contact Number : </p>
                        <span>91 - 731893121</span>
                    </div>
                    <div className="point">
                        <p>3. Local Address : </p>
                        <span>1655 Marmont Ave Los Angeles, California</span>
                    </div>
                    <div className="point">
                        <p>4. Parents Name : </p>
                        <span>-</span>
                    </div>

                    <div className="detail">College Details</div>
                    <div className="point">
                        <p>5. Year : </p>
                        <span>UG2</span>
                    </div>
                    <div className="point">
                        <p>6. Department : </p>
                        <span>Computer Science, Engg</span>
                    </div>

                    <div className="detail">Hostel Details</div>
                    <div className="point">
                        <p>7. Has a Room : </p>
                        <span>No</span>
                    </div>
                    <div className="point">
                        <p>8. Pending Application : </p>
                        <span>Yes</span>
                    </div>
                    <div className="point">
                        <p>9. Pending Inbox : </p>
                        <span>No</span>
                    </div>
                    <div className="point">
                        <p>10. Hostel Name : </p>
                        <span> - </span>
                    </div>
                    <div className="point">
                        <p>11. Room No. : </p>
                        <span> - </span>
                    </div>
                    <div className="point">
                        <p>12. Amount Pending : </p>
                        <span> 6000 INR </span>
                    </div>
                </Main>
                <SendMail>
                    <div className="top">Send an Inbox</div>
                    <input type="text" className="detail" placeholder="Subject" />
                    <textarea name="" id="" className="detail" placeholder="Write you content here..."></textarea>
                    <button className="submit-btn">
                        Send
                    </button>
                </SendMail>
            </div>

        </Container>
    )
}

export default GetProfile

const Container = styled.div`
    .together{
        display: flex;
        align-items: flex-start;
        padding: 10px;
    }
    
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
    min-height: 550px;
    margin-right: 10px;
    width: 70%;
    min-width: 350px;
    border: 1px solid #e5dede;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    position: relative;
    border-radius: 10px;
    background: white;
    padding: 1rem;

    .img-box{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    img{
        height: 200px;
        display: inline;
        border-radius: 10px;
        margin-right: 10px;
        border: 1px solid #e5dede;
    }

    .detail{
        font-weight: 600;
        margin-top: 30px;
        font-size: 1.15rem;
    }

    .point{
        display: flex;
        align-items: center;

        p{
            font-size: 0.9rem;
            font-weight: 500;
        }

        span{
            font-weight: 300;
            margin-left: 10px;
            font-size: 0.9rem;
            color: #a39e9e;
        }
    }
`

const SendMail = styled.div`
    flex: 1;
    min-height: 655px;
    min-width: 350px;
    border: 1px solid #e5dede;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    position: relative;
    border-radius: 10px;
    background: white;
    padding: 1rem;

    .top{
        font-weight: 600;
        font-size: 1.15rem;
        margin-bottom: 20px;
    }

    .detail{
        border: none;
        background-color: rgb(238, 238, 238);
        width: 100%;
        padding: 0.75rem 1rem;
        font-size: 0.8rem;
        border: none;
        outline: none;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    textarea{
        width: 100%;
        height: 450px;
    }

    .submit-btn{
        border: none;
        background-color: cornflowerblue;
        color: white;
        font-size: 0.75rem;
        padding: 0.75rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
`