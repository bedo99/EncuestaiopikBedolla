entrarGoogle = () => {
 
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {

            var token = result.credential.accessToken;
            $('#ModalCenter').modal('hide');
            var user = result.user;
            console.log(token, user.displayName,user.email);

        }).catch(function(error) {
            console.log(error);
    });

}

entrarFacebook = () => {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {

            var token = result.credential.accessToken;
            $('#ModalCenter').modal('hide');
            var user = result.user;
            console.log(token, user.displayName,user.email);

        }).catch(function(error) {
            console.log(error);
    });

}