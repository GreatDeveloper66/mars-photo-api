import { addNewImage,getImages } from '../controllers/marsControllers'

const marsRoutes = app => {
    app.route('/images')
        .get(getImages)
    //POST endpoint
        //.post(addNewImage)
}

export default marsRoutes
