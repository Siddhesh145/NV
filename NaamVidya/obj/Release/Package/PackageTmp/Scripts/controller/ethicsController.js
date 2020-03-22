var ethicsController = function ($scope,ngMeta) {
    console.log('ethics Controller called');
    ngMeta.setTitle('NaamVidya Principles | Name Numerology', ' | Naamvidya');
    ngMeta.setTag('keywords', 'NaamVidya Principles, Name Numerology');
    ngMeta.setTag('description', 'There are many beliefs related withname numerologyand before naming your baby, it is important to understandNaamvidya principlesand accordingly name your baby for a brighter future.');
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
}
ethicsController.$inject = ['$scope', 'ngMeta'];