
const app = require("./deliver-missions");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mhShiva:tOBenzfxMltRxJf8@cluster0-fcszu.azure.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });




MongoClient.connect(uri,{ useNewUrlParser: true }, function(err, client)
{
 
   if (err) {
      console.log('Sorry unable to connect to MongoDB Error:', err);
             } 
  
  else {

      var collection = client.db('NiceGuy').collection('Mission')
      
 
      console.log('Mongo Connection:',client.isConnected());
      /*collection.deleteOne({
        "Name": "Tiger350"
    }, function(err, results) {
        console.log(results.result);
    });*/

      client.close();
  }
}
)



app.use('/api/frommongo',(req, res, next) => {
  const missions= [
       {id: 'sdfdsfsf', title: 'Specefic mission returned', content: 'sdsdf'}
  ];
  
  return res.status(200).json({


      message: 'Mongo is connected and this is a return from a tesst api',
      missions: missions

  });
  });





  module.exports = app;