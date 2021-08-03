const NodePath      = require('path');
const NodeSession   = require('express-session');
const NodeExpress   = require('express');
const NodeCompress  = require('compression');

const nodeApp       = NodeExpress();
const nodeSession   = NodeSession({
    secret: 'guntil',
    resave: false,
    saveUninitialized: true
});

function http_execute()
{
    nodeApp.use(NodeCompress());
    nodeApp.use(nodeSession);
    nodeApp.use(NodeExpress.json({ limit: '50mb' }));
    nodeApp.use(NodeExpress.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));

    nodeApp.use(NodeExpress.static('./docs'));

    var http_port = process.env.PORT;
    http_server = nodeApp.listen(http_port, function () {
        console.log(__filename, `listening at ${http_port}`);
    });

    return;
}

http_execute();
