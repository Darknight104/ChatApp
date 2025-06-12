import jwt from 'jsonwebtoken'
const generateTokenAndSetCookie=(userId, res)=>{
const token =jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"15d",
})
res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,
    httpOnly:true,//save from cross site scripting attacks
    sameSite :"strict",//csrf attacks CROSS SITE REQUEST FOREGERY
    secure:process.env.NODE_ENV!=="development"
})
}
 export default generateTokenAndSetCookie;