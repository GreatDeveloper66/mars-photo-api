import { addNewImage } from '../controllers/marsControllers'

const routes = app => {
    app.route('/images')
    //POST endpoint
        .post(addNewImage)
}

export default routes