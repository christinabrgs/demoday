const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3002

app.use(express.static('public')) // serves static files in public folder i.e js


app.use(cors())

const food = {
    'tacos': {
        'recipe': 'https://tasty.co/recipe/chicken-fajita-tacos',
        'icon': '🌮',
        'image': 'taco.png'
    },
    'tamale':{
        'recipe': 'https://tasty.co/recipe/mexican-red-pork-tamales-as-made-by-edna-peredia',
        'icon': '🫔',
        'image': 'tamales.png' 
    },
    'burrito':{
        'recipe': 'https://tasty.co/recipe/chicken-rice-bean-burritos',
        'icon': '🌯',
        'image': 'burrito.png'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// can also be used to serve js file rather than express.static but express is the better option
// app.get('/js', (request, response)=>{
//     response.sendFile(__dirname + '/main.js')
// })

app.get('/api/:name',(request,response)=>{
    const foodName = request.params.name.toLowerCase()

    if( food[foodName] ){
        response.json(food[foodName])
    }
    // else{
    //     response.json(food['unknown'])
    // }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})