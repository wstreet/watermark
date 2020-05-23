if (process.env.NODE_ENV === 'production') {
    module.exports = require('./lib/watermark.min.js')
} else {
    module.exports = require('./lib/watermark.js')
}