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
    app.route("/delete")
        .delete((request, response)=>{
            const { language_id } = request.body

            pool.query("DELETE FROM public.language WHERE language_id = $1",[language_id], (error, results)=> {
                if (error){
                    throw error
                }

                response.status(200)
            })
        })
    
}