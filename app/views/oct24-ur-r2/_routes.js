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

    router.post('/edit-task-date', (req, res) => { 
        const startDateSelection = req.body['task-start-date']; 
        const dueDateSelection = req.body['due-date']; 
        
        if (startDateSelection === 'no-start-date' && dueDateSelection === 'no due date') { 
            res.redirect('check-your-answers'); 
        } else { 
            res.redirect('date-change-question-page'); 
        } 
    });

    

module.exports = router