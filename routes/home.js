

module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page.  ' })
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });

    app.get('/uploadpic', function (req, res) {
        res.render('uploadpic', { title: 'Upload picture.  ',name:"test page" })
    });

    app.post('/uploadpic', function (req, res) {

        //fs.renameSync(files.upload.path, "upload\\test.png");


    });

    app.get('/showpic', function (req, res) {
        res.render('showpic', { title: 'Show picture.  ',name:"test pic" })
    });

    app.get('/getpic', function (req, res) {

        
		res.sendfile('uploaded/d76ea80c22c900e0df9170ac3bd59298.png');

    });

}
