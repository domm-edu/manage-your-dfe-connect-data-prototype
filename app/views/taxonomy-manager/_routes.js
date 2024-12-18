const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/parent-or-child', function(request, response) {

    var chooseLevel = request.session.data['choose-level']
    if (chooseLevel == "Parent taxonomy"){
        response.redirect("create-taxonomy/create-parent")
    } else {
        response.redirect("create-taxonomy/select-parent")
    }
})

router.post('/add-tags-now-question', function(request, response) {

    var addtags = request.session.data['add-tags-now']
    if (addtags == "Yes"){
        response.redirect("create-taxonomy/add-tags")
    } else {
        response.redirect("create-taxonomy/check-your-answers")
    }
})

router.post('/publish-or-draft-taxonomy', function(request, response) {

    const draftSaved = request.session.data['draft-saved']
    if (draftSaved == "true"){
        response.redirect("./new-taxonomy-draft")
    } else {
        response.redirect("./new-taxonomy")
    }
});


let tags = [];

router.get('/', (req, res) => { 
    res.sendFile('create-taxonomy/add-tags'); 
});

router.get('/add-tags1', (req, res) => { 
        res.sendFile('create-taxonomy/add-tag-value'); 
}); 
    
router.post('/add-tags1', (req, res) => { 
        const { name, term } = req.body; 
        tags.push({ name, term }); 
        res.redirect('create-taxonomy/add-tags');
});

router.get('/tags', (req, res) => { 
    res.json(tags); 
});




module.exports = router
