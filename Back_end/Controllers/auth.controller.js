import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generatetoken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt=await bcrypt.genSalt(10);  
    const hashedPassword=await bcrypt.hash(password,salt);

    // Assign profile picture based on gender
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });

    // Save the user
  if(newUser){
    //generate twt token  
       generateTokenAndSetCookie(newUser._id,res);
    await newUser.save();
    res.status(201).json({
      message: "Signup successful" ,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      }
    });
  }else{
    res.status(400).json({error:"Invalid user data "});
  }

  } catch (error) {
    console.error("Error in signup:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    const isPasswrodCorrect=await bcrypt.compare(password,user?.password ||"");
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // if (password !== user.password) {
    //   return res.status(400).json({ error: "Invalid username or password" });
    // }
    generateTokenAndSetCookie(user._id,res);

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try{
      res.cookie("iwt"," ",{maxAge:0})
      res.status(200).json({message:"Logged out successfully"})
      
  }
  catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
