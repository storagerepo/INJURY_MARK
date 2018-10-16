var myApp=angular.module("requestModule",[]);

myApp.factory("requestHandler",['$http',function($http){
    
    var requestObj={};
    var appURL="https://billpay.crashreportsonline.com/marketing-app/";
    //var appURL="http://192.168.1.236:8181/marketing/";
    
    requestObj.getURL=function(){
       return appURL;
   };

   requestObj.getRequest=function(requestURL,params){
       requestURL=appURL+requestURL;
       return $http.get(requestURL,params).then(function (results) {  
        return results;   
    });
   };   
   
   requestObj.postRequest=function(requestURL,params){      
     
    requestURL=appURL+requestURL;
    return $http.post(requestURL,params).then(function (results) {
        return results;
    });
};        
requestObj.deletePostRequest=function(requestURL,params){
  requestURL=appURL+requestURL+params;
  return $http({
   method : "POST",
   url : requestURL,
}).success(function(response){
   return true;
});
};

return requestObj;

}]);
