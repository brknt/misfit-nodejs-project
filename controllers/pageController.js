



const getIndexPage = (req, res) =>{
    try {
        res.render('index',{
            page_name : 'index'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}


const getAboutPage = (req, res) =>{
    try {
        res.render('about',{
            page_name : 'about'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}


const getTrainerPage = (req, res) =>{
    try {
        res.render('trainer',{
            page_name : 'trainer'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}

const getGalleryPage = (req, res) =>{
    try {
        res.render('gallery',{
            page_name : 'gallery'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}


const getContactPage = (req, res) =>{
    try {
        res.render('contact',{
            page_name : 'contact'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}

const getRegisterPage = (req, res) =>{
    try {
        res.render('register',{
            page_name : 'register'
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}
module.exports = {
    getIndexPage,
    getAboutPage,
    getTrainerPage,
    getGalleryPage,
    getContactPage,
    getRegisterPage
}