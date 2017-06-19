function RequestController($http, $state, SERVER) {

    let vm = this;
    vm.requestTimeoff = requestTimeoff;

    function returnHome(){
        $state.go('root.home');
    }

    function clearForm(){
        
    }

    function requestTimeoff(input) {
        $http.post(`${SERVER}/api/timeoffrequests`, input)
        .then(function(resp){
            console.log("You sent data", resp.data);
            returnHome();
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

RequestController.$inject=['$http', '$state', 'SERVER'];
export default RequestController;
