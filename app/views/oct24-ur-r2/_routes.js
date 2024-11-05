const express = require('express')  
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/date-changes', function(request, response) {

    // Is the date you're changing also on GOV.UK?

    var date = request.session.data['dateChanges']
    if (date == "yes"){
        response.redirect("published-or-scheduled")
    } else {
        response.redirect("cannot-proceed")
    }
})

    // Is the change already published or scheduled to be published on GOV.UK?

    router.post('/gov-uk-published-scheduled', function(request, response) {

        var published = request.session.data['publishedScheduled']
        if (published == "no"){
            response.redirect("cannot-proceed")
        } else {
            response.redirect("review-and-publish")
        }
    })

     // If a date is selected when a user edits a task

     router.post('/edit-task-date', function(request, response) {

        var dateChange = request.session.data['task-start-date']
        if (dateChange == "exact-start"){
            response.redirect("date-change-question-page")
        }
        else if (dateChange == "month-only"){
            response.redirect("date-change-question-page")
        }
        else if (dateChange == "exact-due-date"){
            response.redirect("date-change-question-page")
        }
        else if (dateChange == "month-only-due-date"){
            response.redirect("date-change-question-page")
        } 
        else {
            response.redirect("check-your-answers")
        }
    })

    

module.exports = router