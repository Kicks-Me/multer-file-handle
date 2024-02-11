import Route from 'express';
import { verifyJWT } from '../helper/jwt.js';
import { handleMultipleFiles, upload } from '../helper/multer.js';
const route = Route();

route.post('/employee',verifyJWT, upload.single('Profile'), upload.array('Images', 5), handleMultipleFiles, (req, res) => {
    const profileImage = req.newImages.Profile;
    const Images = req.newImages.newImages;
  
    return res.json({ profileImage, Images });
  });

export default route;