// Schema for a source
var expectScheme1 = {
    type: "object",
    properties: {
       Host : {type: 'string'},
       origin : {type: 'string'},
       link : {type: 'string'},
   },
   required: [
      'Host',
     'link',
      'origin'
   ]
};

var expectScheme2 = {
    type: "object",
    properties: {
       userId    : {type: 'number'},
       id : {type: 'number'},
       title : {type: 'string'},
       body : {type: 'string'}
   },
   required: [
      'userId',
      'id',
      'title',
      'body'
   ]
};

var dogList = {
    type: "object",
    properties: {
       status    : {type: 'string'},
       message : {type: 'object'}
   },
   required: [
      'status',
      'message'
   ]
};