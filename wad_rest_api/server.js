const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://aniket:aniket@cluster0.3iam2cc.mongodb.net/wad').then(()=>{
    console.log("db connected");
})

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    Password:String,
})

const user = mongoose.model('User',userSchema);

app.post('/login',(req,res)=>{
    const {name,username,password} = req.body;

    const User = {name:name,username:username,Passord:password};
    const newUser = new user(User);

    newUser.save().then(()=>{
        console.log('user logged in');
    });

})

app.get('/show/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const existingUser = await user.findById(id);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log('User found:', existingUser);
        res.json(existingUser);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/delete/:id',async(req,res)=>{
    const id =  req.params.id;

    const userDel = await user.findByIdAndDelete(id);
    if(!userDel){
        res.status(404).json('user not found');
    }
    else{
        res.json(userDel);
        console.log('user deleted successfully',userDel);
    }
})

app.patch('/update/:id',async(req,res)=>{
    const id = req.params.id;
    const updates = req.body;
    const userUpdate = await user.findByIdAndUpdate(id,updates,{new:true});

    if(!userUpdate){
        res.status(404).json('user not updated');
    }
    res.json(userUpdate);
    console.log('user updated successfully',userUpdate);
})

app.get('/display',(req,res)=>{
    const userD = user.find();

    res.json(userD);
})


app.listen(3000,(()=>{
    console.log('app listening on port 3000');
}))

