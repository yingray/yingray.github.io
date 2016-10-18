var submitBtn = document.getElementById('submitBtn');

function clickToSubmit() {

  console.log('clickToSubmit');

    var firebaseRef = firebase.database().ref();

    firebaseRef.child('Text').set('stacycc');


}
