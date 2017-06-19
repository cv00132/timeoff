function EmployeesController($http, $state, SERVER) {

    let vm = this;

    vm.employees = [];

    vm.getEmployees = getEmployees;

    function getEmployees() {
        $http.get(`${SERVER}/api/timeoffrequests`)
        .then(function(resp){
            vm.employees = resp.data;
            console.log("You got employees", resp.data);
        })
        .catch(function(error){
            console.log(error);
        });

    }

    vm.getEmployees();

}

EmployeesController.$inject=['$http', '$state', 'SERVER'];
export default EmployeesController;
