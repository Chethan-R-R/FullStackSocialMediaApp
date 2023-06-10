import jwt from 'jsonwebtoken'
 
export const verifyToken=async (req:any,res:any,next:any)=>{
    try{
        let token=req.header("Authorization")
        
        if(!token)res.status(403).send("Access Denied")
        
        if(token.startsWith("Bearer")){ 
            
            token=token.slice(7,token.length)
        }
        const verified=jwt.verify(token,process.env.jwt_SECRET as string)
        req.user=verified
        next()
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const verifyChatToken=(token:string)=>{
    try{
        if(token.startsWith("Bearer")){ 
            
            token=token.slice(7,token.length)
        }
        const verified=jwt.verify(token,process.env.jwt_SECRET as string)
        return verified
    }catch(err){
        return false
    }
}