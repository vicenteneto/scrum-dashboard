module.exports = function (app) {
    var loginController = app.controllers.login;

    app.get('/', loginController.index);
    app.post('/login', loginController.login);
    app.get('/logout', loginController.logout);
};
