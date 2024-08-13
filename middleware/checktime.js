function check(req,res,next){
    const current=new Date()
    const hour=current.getHours()
    const day=current.getDay()
    if( 1<=day && day<=5 && 9<=hour && hour<=17){
       next()
    }
    else{
        
        res.send("closed")
    }

}
module.exports=check