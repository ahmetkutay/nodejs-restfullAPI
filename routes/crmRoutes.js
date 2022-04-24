import {addnewContact, deleteContact, getContacts, getContactWithID, updateContact} from '../controllers/crmController';


import {login, loginRequired, register} from '../controllers/userController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, loginRequired, getContacts)

        // Post endpoint
        .post(loginRequired, addnewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(loginRequired, getContactWithID)

        // updating a specific contact
        .put(loginRequired, updateContact)

        // deleting a specific contact
        .delete(loginRequired, deleteContact);
    app.route('/auth/register')
        .post(register)
    app.route('/login')
        .post(login)

}

export default routes;
