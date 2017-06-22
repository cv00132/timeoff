function HomeController($http, $state, SERVER) {

    let vm = this;

    vm.requests = [];
    vm.employees = [];
    vm.startDates = [];
    vm.endDates = [];
    //vm.absentees = [];

    vm.fixDate = fixDate;
    vm.employeesAbsent = employeesAbsent;
    vm.reasonForRequest = reasonForRequest;

    function init(){
        $http.get(`${SERVER}`)
        .then(function(resp){
            vm.requests = resp.data;

            for(var i = 0; i < vm.requests.length; i++){
                vm.startDates.push(vm.requests[i].StartTime);
                vm.endDates.push(vm.requests[i].EndTime);
                vm.employees.push(vm.requests[i].Name);
            }
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
        var absentees = []
        var beginning = vm.startDates;
        var ending = vm.endDates;
        var today = new Date().getDate();

        for(var i = 0; i < vm.startDates.length; i++){
            if(new Date(ending[i]).getDate() >= today && new Date(beginning[i]).getDate() <= today){
                absentees.push(vm.employees[i])
            }
        }
        console.log(absentees)
        return absentees;
    }

    function reasonForRequest () {

        for(var i = 0; i < vm.requests.length; i++){
            var reason = vm.requests[i].Reason;
        }

    }

}

HomeController.$inject=['$http', '$state', 'SERVER'];
export default HomeController;
