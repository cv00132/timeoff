function RequestByIdController($http, $state, SERVER) {

    let vm = this;

    vm.requests = {};

    vm.returnToPage = returnToPage;
    vm.fixDate = fixDate;
    vm.approveRequest = approveRequest;
    vm.deleteRequest = deleteRequest;
    vm.successfulUpdate = successfulUpdate;

    function init(){
        $http.get(`${SERVER}/${$state.params.id}`)
        .then(function(resp){
            vm.requests = resp.data;
            console.log(vm.requests, vm.requests.Name)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    init();

    function returnToPage(){
        $state.go('root.request');
        $state.reload();
    }

    function fixDate(time){
        var date = new Date(time);
        return date.toDateString();
    }

    function approveRequest(request) {
        $http.put(`${SERVER}/${request.Id}`, request)
        .then(function(resp){
            console.log("You updated request", resp.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    function deleteRequest(requestId) {
        $http.delete(`${SERVER}/${requestId}`)
        .then(function(resp){
            console.log("You deleted request", resp.data);
            $state.reload();
        })
        .catch(function(error){
            console.log(error);
        });
    }

    function successfulUpdate(){
        var myModal = angular.element( document.querySelector( '.successful-update' ) );
        myModal.toggleClass('is-active');
    }

}

RequestByIdController.$inject=['$http', '$state', 'SERVER'];
export default RequestByIdController;
