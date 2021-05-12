//Routes for systems

const dbConnection = require('../../config/dbConnection');

module.exports = (app)=>{

    const connection = dbConnection();

    app.get('/', (req , res)=>{

        connection.query('SELECT * FROM element', (err,result)=>{
            //console.log(result);
            if (err) {
                res.render('../views/error/error.ejs');
                
            }else{
                res.status(200).render('../views/inventory.ejs',{
                    inventario:result
                });   
            }
        });
    });

    app.get('/*' , (req , res)=>{
       res.render('../views/error/error.ejs');
    
    })

    app.post('/inventory', (req, res)=>{

        const {item, data} = req.body;

        connection.query('INSERT INTO element SET?',
        {
        title:item,
        data:data
        }, (err)=>{
            if (err) {
                res.send(`Somethings went wrong ${err}`);
            }else{
                res.redirect('/');
            }
        });
    });


}