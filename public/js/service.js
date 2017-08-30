var axios = require('axios');
var helper = require('./helper');
var Promise = require('es6-promise').Promise;

module.exports = {

	/**
	 * Upload image and get server link
	 *
	 * @return Promise
	 */
	uploadImage: function(file) {
		var url = '/upload';
		return axios.post(url, {
			file: file
		})
	},

	/**
	 * Get the lastest chat messages(10)
	 *
	 * @return Promise
	 */
	getLatestMsg: function() {

		if (!helper.getItem('chatId')) {
			return new Promise(function(resolve) {
				resolve({data: []});
			});
		}

		var url = '/messages';
		return axios.get(url);

	}

}
