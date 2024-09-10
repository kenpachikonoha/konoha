const routes = new Map()

routes.set(["not_found"], {
    handler: () => "404 Not Found",
    params: null
});

/**
 * @param {string} route
 * @returns {[String, Object]}
 */
function extractDynamicParams(route) {
    if (route.endsWith('/')) {
        route = route.slice(0, -1);
    }
    const routeParts = route.split('/');
    const params = {};

    const path = routeParts.map((part) => {
        if (part.startsWith(':')) {
            const paramName = part.substring(1);
            params[paramName] = null;
        }
        return part;
    })

    return [path, params];
}

/**
 * @param {string} route
 * @param {Function} callback
 * @returns {void}
*/
function addRoute(route, callback) {
    const [path, params] = extractDynamicParams(route);
    routes.set(path, { handler: callback, params });
}

/**
 * @param {string} url 
 */
function matchRoute(url) {
    if (url.length > 1 && url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    const paths = url.split("/");
    const params = {}
    let handler = undefined;

    routes.forEach((value, route) => {
        if (paths.length !== route.length) return;
        for (const r of route) {
            if (r.startsWith(':')) {
                const paramName = r.substring(1);
                params[paramName] = paths[route.indexOf(r)];
            }
        }
        handler = value.handler;
    })

    if (!handler) {
        return [routes['not_found'].handler, params];
    }
    return [handler, params];

}

/**
 * @param {string} route
 * @returns {string}
*/
function getRoutes(route) {
    const [handler, params] = matchRoute(route);
    return handler(params);
}

addRoute('/', () => 'Home');
addRoute('/about', () => 'About');
addRoute('/contact', () => 'Contact');
addRoute('/contact/:phone/', (params) => `Contact: ${params.phone}`);
addRoute('/contact/:phone/:person/', (params) => `Contact: ${params.phone} ${params.person}`);
addRoute('/contact/:phone/:person/:city/all', (params) => `Contact: ${params.phone} ${params.person} ${params.city}`);

const result = getRoutes('/contact/1234567890/John Doe/Chicago/all');

console.log(result);