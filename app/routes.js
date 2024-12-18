//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Start folder specific routes  
router.use('/oct24-ur-r2', require('./views/oct24-ur-r2/_routes'));
router.use('/nov24-ur-r3', require('./views/nov24-ur-r3/_routes'));
router.use('/jan25-ur-r4', require('./views/jan25-ur-r4/_routes'));
router.use('/taxonomy-manager', require('./views/taxonomy-manager/_routes'));

module.exports = router
