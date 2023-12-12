const exp = require("express")
const bp = require('body-parser')
const cors = require("cors")
const app = exp()
const port = 7500

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended : true}))

app.get('/firstResquist', (req, res)=>{
    try{ 
        res.status(200).json({name : 'jamal'})
    }catch(err){
        console.error(err)
        res.status(500).json({error : 'internal server error'})
    }
})

app.listen(port, ()=> console.log(`Server runing on port ${port}`))