import {
  addNewContact,
  getContacts,
  getContactWithId,
  updateContact,
  deleteContact
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // Post endpoint
    .post(addNewContact);

  app.route('/contact/:contactID')
    // Get a specific contact
    .get(getContactWithId)
    // Update a specific contact
    .put(updateContact)
    // Delete a specific contact
    .delete(deleteContact)
}

export default routes;                    // exporting the routes function
