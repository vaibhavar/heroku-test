(function(){
	function onRegister(){
		return false;
	}
	window.onRegister = onRegister;
})();

// Globals
var picsilyAppUtil = {};
picsilyAppUtil.serviceUtil = {
    token: "",
    /**
     * gets Data from service 
     * @param  {String} sUrl URL of service
     * @return {Promise}      Response promise
     */
    getDataFromService: function(sUrl){
        return fetch(sUrl);
    },
    /**
     * Posts data to service
     * @param  {String} sUrl  URL of service
     * @param  {Object} oData Data to be sent
     * @return {Promise}       Response promise
     */
    postDataToService: function(sUrl, oData){
    	var oFormData = new URLSearchParams();
    	
    	for(key in oData){
    		oFormData.append(key, oData[key]);
    	}

        return fetch(sUrl, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
            body: oFormData
        });
    },
    loginUser: function(username, password){
        return picsilyAppUtil.serviceUtil.postDataToService("/users/login", {username: username, password: password})
        	.then((oData) => oData.json())
            .then(function(oUserData){
                picsilyAppUtil.serviceUtil.token = oUserData.token;
                return oUserData
            });
    }
};