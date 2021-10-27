const { pool } = require('../db/connect');

module.exports = function(app) {
    app.route("/input")
        .post((request, response) => {
            const { name } = request.body

            pool.query('INSERT INTO public.language (name) VALUES ($1) RETURNING language_id', [name], (error, results) => {
                if (error) {
                    throw error
                }

                response.status(201)
            })
        })
    app.route("/show")
        .get((request, response) => {
            pool.query('SELECT * FROM public.language', (error, results) => {
                if (error) {
                    throw error
                }

                response.status(200).json(results.rows)
            })
        })
    app.route("/delete/:id")
        .delete((request, response)=>{
            const language_id = parseInt(request.params.id)

            pool.query("DELETE FROM public.language WHERE language_id = $1",[language_id], (error, results)=> {
                if (error){
                    throw error
                }

                response.status(200)
            })
        })
    app.route("/deletename")
        .delete((request, response)=>{
            const { name } = request.body

            pool.query("DELETE FROM public.language WHERE name = $1",[name], (error, results)=> {
                if (error){
                    throw error
                }

                response.status(200)
            })
        })
    app.route("/update")
        .put((request,response)=>{
            const {name, language_id} = request.body

            pool.query("UPDATE public.language SET name = $1 where language_id = $2",[name,language_id], (error,results)=>{
                if (error){
                    throw error
                }

                response.status(200)
            })
        })
}