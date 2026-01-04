const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 3000;
app.use(express.json());




app.get('/', (req, res) => {
    res.send('user server is running')
})
const users = [
    {
        id: 1,
        name: 'sabina',
        email: 'sabina@gmail.com'
    },
    {
        id: 2,
        name: 'tabina',
        email: 'sabina@gmail.com'
    },
    {
        id: 3,
        name: 'mabina',
        email: 'sabina@gmail.com'
    }
]
const petData=[
    {name:"cat",price:300},
    {name:"dog",price:300},
    {name:"Bilay",price:300}
]
app.get('/users', (req, res) => {
    res.send(users);
})
app.get('/pets',(req,res)=>{
    res.send(petData);
})
app.post('/users', (req, res) => {
    console.log('user post hit');
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})
app.post('/pets',(req,res)=>{
    console.log(req.body);
    const newPets=req.body;
    petData.push(newPets);
    res.send(newPets)
    
})
app.listen(port, () => {
    console.log(`Users server running on port ${port}`);

})