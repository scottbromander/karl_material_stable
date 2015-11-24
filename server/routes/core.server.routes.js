'use strict';
//The "use strict" Directive. The "use strict" directive is new in JavaScript 1.8.5
// (ECMAScript version 5). It is not a statement, but a literal expression, ignored by earlier
// versions of JavaScript. The purpose of "use strict" is to indicate that the code should be
// executed in "strict mode".


//changed all from app to my app  and added angular to .module.exports

//changed core to my App
module.exports = function(myApp) {

    var myApp = require('../controllers/core.server.controller');


    //was app                        was core
    myApp.route('/server-error').get(myApp.renderServerError);
    myApp.route('/not-found').get(myApp.renderNotFound);

    myApp.route('/*').get(myApp.renderIndex);

    myApp.route('/contact-form').post(myApp.sendMail);

};
