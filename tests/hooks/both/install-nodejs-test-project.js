const fse = require('fs-extra');
const path = require('path');

module.exports = function(context)
{
  var Q = require('q');
  var deferral = new Q.defer();

  var projectRoot = context.opts.projectRoot;
  var pluginRoot = context.opts.plugin.dir;

  fse.copy(path.join(pluginRoot,'nodejs-project'),path.join(projectRoot,'www','nodejs-project'))
  .then( () => deferral.resolve() )
  .catch ( err => deferral.reject(err) );

  return deferral.promise;
}
