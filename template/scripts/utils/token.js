'use strict';

var axios = require('axios').default;

function Request(cb) {
  this.then(function(response){
    console.log('#### RESPONSE (token) ####');
    console.log('StatusCode:' + response.status);
    if (response.statusCode === 201) {
      console.log('Location:' + response.headers.location);
    } else {
      console.log('#### ERROR (token) ####');
      cb(response.data);
    }
  })
  this.catch(function(error){
    console.log('#### ERROR (token) ####');
    cb(error);
  })
  return this;
}

function getToken(config, user, cb) {

  console.log(JSON.stringify(config));
  console.log(JSON.stringify(user));
  var requestConfig = {
    method: 'post',
    url: config.apiWebUrl + '/api/signin?getHash=true',
    headers: {
      'Content-Type': 'application/json'
    },
    data: user
  };
  Request.call(axios(requestConfig), cb);

}

module.exports.getToken = function (config, cb) {

  var _user = {
    email: config.user,
    password: config.password,
    domain: config.domain,
    profile: 'wiwi'
  };

  getToken(config, _user, function (userWithToken) {
    let token = userWithToken.token;
    cb(token);
  });

};
