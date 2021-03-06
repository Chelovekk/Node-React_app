const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended:true}))


app.use('/api/razr', require('./routes/send.route'))

// app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/api/link', require('./routes/link.routes'))
// app.use('/t', require('./routes/redirect.routes'))


const PORT = config.get('port')||3000

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology:true,
            useCreateIndex: true,
            useNewUrlParser: true
        })
        app.listen(3000, ()=> console.log(`started on ${PORT}...`))
    }catch(err){
        console.log('Error', err)
        process.exit(1);
    }
}

start()