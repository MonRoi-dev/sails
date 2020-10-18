/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'homepage' },
  'get /create': {view: 'create'},
  'get /list': {view: 'list'},
  'post /add': 'TodosController.add',
  'get /list': 'TodosController.list',
  'delete /todos/destroy/:id': 'TodosController.delete'
};
