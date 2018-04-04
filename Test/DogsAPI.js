var fs = require('fs');
// file is included here:
eval(fs.readFileSync('./Chakram-API/Test/Schema.js')+'');

var chakram = require('chakram'),
expect = chakram.expect;

var baseURL = 'https://dog.ceo/api';
var allbreedEndpoint = "/breeds/list/all"

describe("Test1", function () {
  it("should return all the dogs breed", function () {
    return chakram.get(baseURL+allbreedEndpoint).then(function(response){
    console.log(response.body);
        expect(response).to.have.json('status','success')
    })
  });
});

describe("Test2-Check dog list Schema", function () {
  it("should return all the dogs breed", function () {
    return chakram.get(baseURL+allbreedEndpoint).then(function(response){
    console.log(response.body);
        expect(response).to.have.schema(dogList)
    })
  });
});

describe("Test2-Check Schema", function () {
  it("should return all the dogs breed", function () {
    return chakram.get(baseURL+allbreedEndpoint).then(function(response){
    console.log(response.body);
        expect(response).to.have.schema(dogList)
    })
  });
});