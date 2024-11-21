const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/urgent-request', function(request, response) {

    var publishDate = request.session.data['publish-task-date']
    if (publishDate == "As soon as possible"){
        response.redirect("create-subtask/urgent")
    } else {
        response.redirect("create-subtask/comments")
    }
})

router.post('/urgent-request-question', function(request, response) {

    var isthisUrgent = request.session.data['urgentRequest']
    if (isthisUrgent == "Yes"){
        response.redirect("create-subtask/why-is-it-urgent")
    } else {
        response.redirect("create-subtask/comments")
    }
})

module.exports = router
