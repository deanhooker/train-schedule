// Initialize Firebase
var config = {
    apiKey: "AIzaSyBvMlxL_Ci2Qa6uX5hoUJcSS1qcTTKuAaY",
    authDomain: "train-schedule-c5825.firebaseapp.com",
    databaseURL: "https://train-schedule-c5825.firebaseio.com",
    projectId: "train-schedule-c5825",
    storageBucket: "train-schedule-c5825.appspot.com",
    messagingSenderId: "197742244357"
};
firebase.initializeApp(config);

//create global variables
const database = firebase.database();
let trainName;
let trainDestination;
let firstTrainTime;
let trainFrequency;
let nextArrival;
let minutesAway;

//on submit click push data to firebase
$('#submitBtn').on('click', function (event) {

    //prevent default submit function
    event.preventDefault();

    //set local variables
    trainName = $('#train-name').val().trim();
    trainDestination = $('#train-destination').val().trim();
    firstTrainTime = $('#first-train-time').val().trim();
    trainFrequency = $('#train-frequency').val().trim();

    //push to local variables to firebase
    database.ref().push({
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrainTime,
        frequency: trainFrequency
    });

    //clear entry form
    $('#train-name').val('');
    $('#train-destination').val('');
    $('#first-train-time').val('');
    $('#train-frequency').val('');
});

//update schedule table whenever data is added to firebase
database.ref().on('child_added', function (childSnapshot) {

    console.log(childSnapshot.val());

    //pull firebase variables to set local variables
    trainName = childSnapshot.val().name;
    trainDestination = childSnapshot.val().destination;
    firstTrainTime = childSnapshot.val().firstTrain;
    trainFrequency = childSnapshot.val().frequency;

    //test values
    nextArrival = 0;
    minutesAway = 0;

    //add variables to table
    $('#train-schedule > tbody').append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>"
        + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");

});