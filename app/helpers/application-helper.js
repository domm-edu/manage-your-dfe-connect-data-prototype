const _ = require('lodash')




  exports.getFirstUnansweredQuestionFromTagValues = (data) => {
    let tagName = _.get(data, 'tagValue.tagName')
    let tagTerm = _.get(data, 'tagValue.tagTerm')
  
    if(!tagName) {
      return 'name'
    }
  
    if(!tagTerm) {
      return 'term'
    }
  
    return null
  }