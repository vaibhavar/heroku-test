'use strict';

angular.module('picsilyApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var dishes=[];
            var promotions = [];

            /*this.getPromotions = function(){
                return $resource(baseURL+"promotions/:id", null, {'update': {'method': 'PUT'}});
            };
            */
           
            /*
            this.getDishes = function(){
                return $resource(baseURL+"dishes/:id", null, {'update': {'method': 'PUT'}});
            };
            */
    
                //this.getDish = function (index) {
                //    return $resource.get(baseURL+"dishes/"+index);
                //};
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                
                //this.getPromotion = function(index){
                //   return promotions[index];
                //}
                        
        }]) 
        .factory('corporateFactory', ["$resource", 'baseURL', function($resource, baseURL) {
    
            var oFactory = {};
            /*oFactory.getLeaders = function(){
                return $resource(baseURL+"leadership/:id", null, {'update': {'method': 'PUT'}});
            };*/
            return oFactory;
            
        }])
        .factory('feedbackFactory', ["$resource", 'baseURL', function($resource, baseURL) {
    
            var oFactory = {};
            /*oFactory.getFeedback = function(){
                return $resource(baseURL+"feedback/:id", null, {'update': {'method': 'PUT'}});
            };*/
            
            return oFactory;
            
        }])
        .factory('userFactory', ["$resource", 'baseURL', function($resource, baseURL) {
    
            var oFactory = {};
            oFactory.getUser = function(){
                return picsilyAppUtil.serviceUtil.getDataFromService("/users/loggedInUser");
            };

            oFactory.login = function(username, password){
              return picsilyAppUtil.serviceUtil.loginUser(username, password);
            };

            oFactory.register = function(firstname, lastname, username, password){
                return picsilyAppUtil.serviceUtil.registerUser(firstname, lastname, username, password);
            };
            
            return oFactory;
            
        }])
        .factory('photoFactory', ["$resource", 'baseURL', function($resource, baseURL) {
    
            var oFactory = {};
            oFactory.getPhotos = function(){
                return picsilyAppUtil.serviceUtil.getDataFromService("/photos/");
            };

            oFactory.upload = function(file){
                return picsilyAppUtil.serviceUtil.uploadPhoto(file);
            };
            
            return oFactory;
            
        }]);