entrarGoogle = () => {
 
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {

            var token = result.credential.accessToken;
            console.log(token);
            $('#ModalCenter').modal('hide');

        }).catch(function(error) {
            console.log(error);
    });

}

entrarFacebook = () => {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {

            var token = result.credential.accessToken;
            console.log(token);
            $('#ModalCenter').modal('hide');

        }).catch(function(error) {
            console.log(error);
    });

}