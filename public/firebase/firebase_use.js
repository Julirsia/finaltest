function loginout(event){
    event.preventDefault();
    if ($("#AUTH_STATE").text() == "Login") {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

        }).catch(function (error) {
            alert(error.message)
        });
    } else if ($("#AUTH_STATE").text() == "Logout") {
        firebase.auth().signOut().then(function () {
            alert("로그아웃 되었습니다.");
        }).catch(function (error) {
            alert(error.message)
        });
    }
}
$("#BTN_GOOGLE_LOGIN").click(function () {
    if ($("#AUTH_STATE").text() == "Login") {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

        }).catch(function (error) {
            alert(error.message)
        });
    } else if ($("#AUTH_STATE").text() == "Logout") {
        firebase.auth().signOut().then(function () {
            alert("로그아웃 되었습니다.");
        }).catch(function (error) {
            alert(error.message)
        });
    }
});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#AUTH_STATE").text("Logout");
    } else {
        $("#AUTH_STATE").text("Login");
    }
});