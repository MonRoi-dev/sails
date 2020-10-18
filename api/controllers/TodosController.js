/**
 * TodosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add:function(req, res){
        const title = req.body.title

        Todos.create({title:title}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'})
            }

            res.redirect('list')
        })
    },
        
    list:function(req, res){
        Todos.find({}).exec(function(err, todos){
            if (err) {
                res.send(500, {error: 'Database Error'})
            }
            res.view('list', {todos:todos})
        })
    },

    delete:function(req, res){
        Todos.destroy({id:req.params.id}).exec(function(err){
            if (err) {
                res.send(500, {error: 'Database Error'})
                console.log(err)
            }
           res.redirect('/todos/list')
        })
        return false;
    }

    

};