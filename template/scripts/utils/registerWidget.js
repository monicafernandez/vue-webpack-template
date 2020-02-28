'use strict';

var axios = require('axios').default,
   FormData = require('form-data'),
  fs = require('fs'),
  nameWidget = require('../../package.json').name;


function Request() {
  this.then(function(response){
    console.log('#### RESPONSE (register) ####');
    console.log('StatusCode:' + response.status);
    if (response.statusCode === 201) {
      console.log('Location:' + response.headers.location);
    } else {
      console.log('#### ERROR (register) ####');
      console.log('Error: ' + response.data)
    }
  }).catch(function(error){
    console.log('#### ERROR (register) ####');
    console.log('Error: ' + error)
  })
  return this;
}

function createRequest(type, token, config, nameWidget, form) {
  var requestConfig = {
    url: config.apiWebUrl + '/api/wiwi/' + config.domain + '/bundles',
    headers: {
        'Authorization': `Bearer ${token}`
    }
  };
  return {
    'POST': function () {
      requestConfig.method = 'post'
      requestConfig.data = form
      requestConfig.headers['Content-Type'] = `multipart/form-data; boundary=${form._boundary}`
      return Request.call(axios(requestConfig));
    },
    'PUT': function () {
      requestConfig.method = 'put'
      requestConfig.data = form
      requestConfig.url = requestConfig.url + '/' + nameWidget;
      requestConfig.headers['Content-Type'] = `multipart/form-data; boundary=${form._boundary}`
      return Request.call(axios(requestConfig));
    },
    'DELETE': function () {
      requestConfig.method = 'delete'
      requestConfig.url = requestConfig.url + '/' + nameWidget;
      return Request.call(axios(requestConfig));
    }
  } [type]();

}

function createForm(metaFile) {
  var bodyFormData = new FormData();
  bodyFormData.append('meta', fs.createReadStream(process.cwd() + '/' + metaFile));
  bodyFormData.append('bundle', fs.createReadStream(process.cwd() + '/build/bundle.js'));
  bodyFormData.append('vendor', fs.createReadStream(process.cwd() + '/build/vendor.bundle.js'));
  return bodyFormData;
}

module.exports.register = function (config, sessionId) {
  var form = createForm(config.meta);
  form.append('name', nameWidget);
  createRequest('POST', sessionId, config, nameWidget, form);
};

module.exports.update = function (config, sessionId) {
  var form = createForm(config.meta);
  createRequest('PUT', sessionId, config, nameWidget, form);
};

module.exports.delete = function (config, sessionId) {
  createRequest('DELETE', sessionId, config, nameWidget);
};
