var chakram = require('chakram'),
expect = chakram.expect;



  before(function() {
        apiResponse = chakram.get("http://api.randomuser.me/0.6?gender=female");
        return apiResponse;
        return chakram.wait();
    });

    it("should return 200 on success", function () {
            return expect(apiResponse).to.have.status(200);
        });

    it("should return content type and server headers", function () {
           expect(apiResponse).to.have.header("server");
           expect(apiResponse).to.have.header("content-type", /text/);
           return chakram.wait();
       });

     it("should return a valid email address", function () {
             return expect(apiResponse).to.have.json(function(json) {
                 var email = json.results[0].user.email;
                 expect(/\S+@\S+\.\S+/.test(email)).to.be.true;
             });
             return chakram.wait();
         });

    it("Verify the dynamic content with reguilar exopression", function () {
           return expect(apiResponse).to.have.json(function(json){
           var firstName = json.results[0].user.name.first;
           console.log(firstName);
           expect(firstName).to.match(/[a-zA-Z]/);

           });
           return chakram.wait();
      });