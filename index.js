const app =  require("./back/server");
const dbCon = require ("./back/src/config/dbCon");
const port = process.env.PORT || 3000;

dbCon().then(
    res=> {
    app.listen(port,()=>{
    console.log(`Port is running on http://localhost:${port}`);
})    
}
)
