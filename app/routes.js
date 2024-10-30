//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Start folder specific routes  
router.use('/oct24-ur-r2', require('./views/oct24-ur-r2/_routes'));


module.exports = router
