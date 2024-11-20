const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/urgent-request', function(request, response) {

    var publishDate = request.session.data['publish-task-date']
    if (publishDate == "soon"){
        response.redirect("create-subtask/urgent")
    } else {
        response.redirect("create-subtask/comments")
    }
})

    module.exports = router
