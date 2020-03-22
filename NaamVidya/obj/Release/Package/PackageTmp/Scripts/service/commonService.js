var commonService = function ($http, $httpParamSerializerJQLike, $cookies) {

    //
    this.post_json_data = function (p_link, p_data) {
        return $http({
            method: 'POST',
            url: p_link,
            data: JSON.stringify(p_data),

            headers: {
                'Content-Type': 'application/json',
                //            'Authorization': v_Authorization
            }
            /* headers : {
				'Content-Type' : 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
				'Access-Control-Allow-Headers':'X-Requested-With'    
			} */
        });
    };

    this.get_cookies_data = function (p_id) {
        return $cookies.get(p_id);
    };

    this.put_cookies_data = function (p_id, p_data) {
     var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        //$cookies.put('myFavorite', 'oatmeal', { 'expires': expireDate });
        return $cookies.put(p_id, p_data, { 'expires': expireDate });
    
    };

    this.remove_cookies_data = function (p_id) {
        return $cookies.remove(p_id);
    };
}


commonService.$inject = ['$http', '$httpParamSerializerJQLike', '$cookies'];