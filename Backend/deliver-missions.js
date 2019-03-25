
/*How to make js files exchange data: 
        My suggestions: 
            1. Send Directly 
            2. Use a Service and create apis decoupled directly connected to server using local variable called app
            , if u wanna exchange data use a service  */


 //Send Diectly as Json response   , using 2 


 
// Requiring express and istanciating it.

const express = require('express');
const app = express();



// getting request on following path
 app.use('/api/allmissions',(req, res, next) => {
    const missions= [
         {id: 'sdfdsfsf', title: 'first server side mission', content: 'sdsdf'},
         {id: 'sdfdsfsf', title: 'second server side mission', content: 'sdsdf'},
         {id: 'sdfdsfsf', title: 'thirs server side mission', content: 'sdsdf'},
    ];
    
    return res.status(200).json({
        message: 'missions fetched successfully',
        missions: missions

    });
   
    });

    
// getting a specefic mission by ID 
 app.use('/api/idmission',(req, res, next) => {
    const missions= [
         {id: 'sdfdsfsf', title: 'Specefic mission returned', content: 'sdsdf'}
    ];
    
    return res.status(200).json({


        message: 'Specefic mission fetched successfully',
        missions: missions

    });
    });

    

    app.get('/', (req, res) => {
        res.send('Hello Woooooooooooooooooooooooooooooooooorld!');
      });



    // we execute
    module.exports = app;

    