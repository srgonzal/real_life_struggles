// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

     else if (request.url === "/cats") {
         fs.readFile('cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
     else if (request.url === "/cars/new") {
         fs.readFile('new_form.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
      else if(request.url === '/images/color_cats.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/color_cats.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    else if(request.url === '/images/neat_car.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/neat_car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/neat_car_three.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/neat_car_three.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    else if(request.url === '/images/neat_cat_two.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/neat_car_two.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    else if(request.url === '/images/oh_god_cat.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/oh_god_cat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    else if(request.url === '/images/omg_cat.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/omg_cat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");