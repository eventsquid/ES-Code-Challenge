// This handles errors that happen in asynchronous routes.
// This is used to wrap around any routes using the 'async' keyword

module.exports = fn => (req, res, next) => {
    Promise.resolve(
        fn(req, res, next)
    ).catch(next);
};