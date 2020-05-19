const app = require('./app')
const port = process.env.PORT | 5000

app.listen(5000,function(){
    console.log(`Server is running on port ${port}`)
})
