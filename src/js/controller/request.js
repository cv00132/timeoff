function RequestController($http, $state, SERVER) {

    let vm = this;

    vm.requests = [];

    vm.returnToPage = returnToPage;
    vm.fixDate = fixDate;
    vm.approveRequest = approveRequest;
    vm.deleteRequest = deleteRequest;
    vm.successfulUpdate = successfulUpdate;

    function returnToPage(){
        $state.go('root.request');
        $state.reload();
    }

    function getRequests(){
        $http.get(`${SERVER}`)
        .then(function(resp){
            vm.requests = resp.data;
        })
        .catch(function(error){
            console.log(error)
        })
    }

    getRequests();

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

RequestController.$inject=['$http', '$state', 'SERVER'];
export default RequestController;
