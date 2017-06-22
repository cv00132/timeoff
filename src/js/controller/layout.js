function LayoutController($http, $state, SERVER) {

    let vm = this;

    vm.toggleView = toggleView;
    vm.toggleModal = toggleModal;
    vm.submitRequest = submitRequest;

    function toggleView(){
        console.log("button clicked")

        var profileView = angular.element( document.querySelector( '.profile-view' ) );
        profileView.toggleClass('accordion-hide');
        profileView.toggleClass('accordion-show');
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
