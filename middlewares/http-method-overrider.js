// https://mohammdowais.medium.com/sending-put-and-delete-requests-through-html-f9ffe9e1b6cb

// TODO: Criar testes para o middleware
function overrideHttpMethod(req, _res, next) {
    const { body } = req;

    if (typeof body === 'object' && body._method) {
        switch(body._method.toUpperCase()) {
            case 'POST':
            case 'PUT':
            case 'PATCH':
            case 'DELETE':
                req.method = body._method;
                break;
            default:
                req.method = 'GET'
        }
    }
    
    if ('_method' in body) delete req.body._method;

    next();
}

module.exports = overrideHttpMethod;