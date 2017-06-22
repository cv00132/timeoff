function HomeController($http, $state, SERVER) {

    let vm = this;

    vm.requests = [];
    vm.startDates = [];
    vm.endDates = [];

    vm.fixDate = fixDate;
    vm.employeesAbsent = employeesAbsent;
    vm.reasonForRequest = reasonForRequest;
    vm.colorStatus = colorStatus;

    function init(){
        $http.get(`${SERVER}`)
        .then(function(resp){
            vm.requests = resp.data;

            for(var i = 0; i < vm.requests.length; i++){
                vm.startDates.push(vm.requests[i].StartTime);
                vm.endDates.push(vm.requests[i].EndTime);
            };
        })
        .catch(function(error){
            console.log(error)
        })
    }

    init();

    function fixDate(time){
        var date = new Date(time);
        return date.toDateString();
    }

    function employeesAbsent () {
        var employees = 0;
        var beginning = vm.startDates;
        var ending = vm.endDates;
        var today = new Date().getDate();

        for(var i = 0; i < vm.startDates.length; i++){
            if(new Date(ending[i]).getDate() >= today && new Date(beginning[i]).getDate() <= today){
                employees += 1
            }
        } return employees
    }

    function reasonForRequest () {

        for(var i = 0; i < vm.requests.length; i++){
            var reason = vm.requests[i].Reason;
        }

    }

    function colorStatus (status) {
        var requestStatus = angular.element(document.querySelector( '.time-off-status' ));

        if(status === 'Pending'){
            requestStatus.addClass('is-warning');
            requestStatus.removeClass('is-success');
            requestStatus.removeClass('is-danger');
        } else if(status === 'Approved'){
            requestStatus.addClass('is-success');
            requestStatus.removeClass('is-warning');
            requestStatus.removeClass('is-danger');
        } else if(status === 'Declined'){
            requestStatus.addClass('is-danger');
            requestStatus.removeClass('is-success');
            requestStatus.removeClass('is-warning');
        }
        return status
    }
}

HomeController.$inject=['$http', '$state', 'SERVER'];
export default HomeController;
