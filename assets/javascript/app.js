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

const database = firebase.database();

let trainName;
let trainDestination;
let firstTrainTime;
let trainFrequency;
let nextArrival;
let minutesAway;

$('#submitBtn').on('click', function(event) {
    event.preventDefault();

    trainName = $('#train-name').val().trim();
    trainDestination = $('#train-destination').val().trim();
    firstTrainTime = $('#first-train-time').val().trim();
    trainFrequency = $('#train-frequency').val().trim();
  
    database.ref().push({
      name: trainName,
      destination: trainDestination,
      firstTrain: firstTrainTime,
      frequency: trainFrequency
    });
  
    $('#train-name').val('');
    $('#train-destination').val('');
    $('#first-train-time').val('');
    $('#train-frequency').val('');

    console.log(trainName);
  
  });
  