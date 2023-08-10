const Institutes=require("../../Models/institutes");
const Admins=require("../../Models/admins");
const Hostels=require("../../Models/hostels");
const Rooms = require("../../Models/hostel_rooms");
const Canteens = require("../../Models/canteen");
const fs = require ("fs");
const cloudinary = require ('cloudinary').v2;

const addInstitute=async (req,res)=>{
    const admin = await Admins.findById(req.user.id,{college:1});
    Institutes.create({
        name:admin.college,
    },async (err,newInstitute)=>{
        if(err)
            return res.status(500).json("Error in creating new Institue in the Database");
        await Admins.findOneAndUpdate({id:admin.id},{institute:newInstitute.id});
    });
} 

const addHostel=async (req,res)=>{
    const file = req.file;
    const {id} = req.body.user;
    const admin = await Admins.findById(id);
    const [Institute] = await Institutes.find({"name":admin.college});
    //console.log(institute) ;
    const {name, address, gender} = req.body;
    const college = admin.college;
    const institute = Institute._id ;
    cloudinary.config ({
        cloud_name : 'hosterr',
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret : process.env.CLOUDINARY_API_SECRET
    });
    let test = await cloudinary.uploader.upload (file.path, (error, cloudinary_result) => {
        if (error) 
            return res.status (400).send ('document upload error');
    })
    Hostels.create({
        name,
        gender,
        address,
        college,
        institute,
        room_overview : test.secure_url
    },async (err,newHostel)=>{
        if(err)
            return res.status(500).json({message:"Error in creating New Hostel in the Database",error:err});
        Institute.hostels.push(newHostel._id);
        await Institute.save();
        //console.log(institute) ;
        
        res.status(200).json({
            newHostel
        });
    });
}

const addRoom= async(req,res)=>{
    try {
        const {hostelname,roomno,fees,roomType} = req.body;
        //console.log('reached') ;
        const [hostel] = await Hostels.find({"name":hostelname}) ;
        
        const hostelId = hostel._id ;
        const Room = await Rooms.find({"hostelId":hostelId , "roomno":roomno}) ;
        if(Room.length > 0) return res.status(200).json("Room with same room number already exists in the hostel") ;
        const room  = await Rooms.create({
            roomType ,
            hostelId ,
            fees ,
            roomno ,
        });     
        //console.log(Room) ;
        hostel.rooms.push(room._id);
        //console.log(room._id) ;
        await hostel.save();

        res.status(200).json("Room added Succesfully !");
    } catch (err) {
        console.log(err) ;
        res.status(400).json({message:"Bad Request.",err:err});
    }
}

const addCanteen = (req,res)=>{
    const {name,start,end,phone} = req.body;
    const admin = req.body.user;
    const institute = admin.institute;
    Canteens.create({
        name,
        start,
        end,
        institute,
        phone
    },(err,canteen)=>{
        if(err)return res.status(400).json({msg:"Not required details to create Canteen.",err});
        res.status(200).json("Canteen Added Succesfully !!!");
    });
}

module.exports={
    addInstitute,
    addHostel,
    addRoom,
    addCanteen
}