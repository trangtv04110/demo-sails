/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// index: function(req, res) {
	// 	User.find(function(err, users) {
	// 		if(err) return next(err);
	// 		res.view({ users: users });
	// 	});
	// },
	// list: function(req, res) {
	// 	res.view();
	// },
	new: function(req, res) {
		res.view();
	},
};

