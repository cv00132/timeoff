function LayoutController($http, $state, SERVER) {

    let vm = this;

    vm.managerView = managerView;
    //vm.employeeView = employeeView;
    vm.toggleModal = toggleModal;
    vm.submitRequest = submitRequest;

    function managerView(){
        console.log("button clicked")

        var managerView = angular.element( document.querySelectorAll( '.view' ) );
        //managerView.addClass('manager-view');
        managerView.toggleClass('employee-view');

        $state.go('root.employees')
    }

    function employeeView(){
        console.log("button clicked")

        var employeeView = angular.element( document.querySelectorAll( '.view' ) );
        employeeView.removeClass('manager-view');
        employeeView.toggleClass('employee-view');


    }

    function toggleModal(){
        var myModal = angular.element( document.querySelector( '.modal' ) );
        myModal.toggleClass('is-active');
    }

    function submitRequest(input) {
        $http.post(`${SERVER}`, input)
        .then(function(resp){
            console.log("You sent data", resp.data);
            toggleModal();
            $state.reload();
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

LayoutController.$inject=['$http', '$state', 'SERVER'];
export default LayoutController;
