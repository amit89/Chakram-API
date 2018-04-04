var chakram = require('chakram');
   expect = chakram.expect;

   describe("Method Test1", function () {
     it("should make post request", function () {
      var fs = require('fs');
       var response = chakram.post("https://httpbin.org/post", undefined, {
                      				formData: {
                      					pkgFile: fs.createReadStream('./package.json')
                      				}
                      			});
       expect(response).to.have.json('files', function (files) {
       				expect(files).to.have.key('pkgFile');
       				expect(files.pkgFile).to.contain('chakram');
       			});
       return chakram.wait();
     });
   });

  describe("Method Test1", function () {
       it("should make post request", function () {
        var fs = require('fs');
         var response = chakram.put("http://httpbin.org/put");
         return chakram.wait();
       });
     });

