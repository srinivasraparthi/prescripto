import jwt from 'jsonwebtoken'

// ADMIN authentication middleware

const authAdmin = async (req, res, next) => {
    try {
        const {adminToken} = req.headers
        if( !adminToken){
            res.json({success:false, message:"Not Authorized Login again"})
        }

        const token_decode = jwt.verify(adminToken, process.env.JWT_SECRET)
        if( token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            res.json({success:false, message:"Not Authorized Login again"})
        }

        next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authAdmin