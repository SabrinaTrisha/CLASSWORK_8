var Article = require('./../models/article.model')
module.exports.form = function(request, response){
    response.render('form.ejs')
}

module.exports.new = function(request,response){

    let article = new Article(request.body)
    article.save(function(err,data){

        if(err){
       return  response.status(400).json({msg: "All fields are required"})
      }
      return response.status(200).json({article:data})

    })
}

module.exports.read = function(request, response){
    Article.find({'_id':request.params.id}, 
      function(err, data){
        if(err){
            return response.status(400)
                            .json({msg: 'Could not query the db'})
        }
        console.log(data)
        return response.render('article.ejs', {
            article:data[0]
        })
    })
}