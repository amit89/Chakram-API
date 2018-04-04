var fs = require('fs');
// file is included here:
eval(fs.readFileSync('./Chakram-API/Test/Schema.js')+'');
var chakram = require('chakram'),
expect = chakram.expect;

describe("Test1", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.get("http://httpbin.org/get?test=chakram");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).not.to.be.encoded.with.gzip;
    expect(response).to.comprise.of.json({
      args: { test: "chakram" }
    });
    return chakram.wait();
  });
});

describe("Test2-should fail", function() {
it("should check that the returned JSON object satisifies a JSON schema", function () {

return chakram.get("http://httpbin.org/get").then(function(response){
   console.log(response.body);
   expect(response).to.have.schema(expectScheme1);
        })
    });
});

describe("Test3", function() {
it("should check that the returned JSON object should contains the passed arguments", function () {

return chakram.get("http://httpbin.org/get?test=api,test").then(function(response){
   console.log(response.body);
   expect(response).to.comprise.of.json({
    args:{test: "api,test"}})
    });
    return chakram.wait();
});
});

describe("Test4", function(){
it("should check the passed schema and verify as well", function(){
return chakram.get("https://jsonplaceholder.typicode.com/posts/29").then(function(response){
    console.log(response.body);
    expect(response).to.have.schema(expectScheme2);
        })
    });
});

describe("Test5", function(){
it("should check the json objects for verification", function(){
return chakram.get("https://jsonplaceholder.typicode.com/posts/29").then(function(response){
    console.log(response.body);
    expect(response).to.have.json('userId',3)
    expect(response).to.have.json('id',29)
    expect(response).to.have.json('title', 'iusto eius quod necessitatibus culpa ea');
        })
    });
});


