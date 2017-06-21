function HomeController($http, $state, SERVER) {

    let vm = this;

    vm.requests = [];
    vm.startDates = [];
    vm.endDates = [];

    vm.fixDate = fixDate;
    vm.employeesAbsent = employeesAbsent;

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
                console.log(new Date(beginning[i]).getDate(), today, new Date(ending[i]).getDate())
                employees += 1
            }
        } return employees
    }

    function getTotal (){
        return
    }

    function timeOffInfo () {

    }
}

HomeController.$inject=['$http', '$state', 'SERVER'];
export default HomeController;
