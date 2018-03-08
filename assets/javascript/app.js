var config = {
    apiKey: "AIzaSyBm9A_qjSvbLM5DosJppaleeX_1KdW-KnE",
    authDomain: "train-schedular-hw.firebaseapp.com",
    databaseURL: "https://train-schedular-hw.firebaseio.com",
    projectId: "train-schedular-hw",
    storageBucket: "train-schedular-hw.appspot.com",
    messagingSenderId: "487358579033"
  };
  firebase.initializeApp(config);

  var database = firebase.database()

$("#addTrain").on("click", function(event) {
    event.preventDefault()

    var trainName = $("#train-name").val().trim()
    var trainDes = $("#train-dest").val().trim()
    var trainFreq = $("#train-frequency").val().trim()
    var trainArrival = $("#train-arrival").val().trim()
    var trainMinAway = $("#min-away").val().trim()
    console.log(response)

    var newTrain = {
        name: trainName,
        destination: trainDes,
        frequency: trainFreq,
        arrival: trainArrival,
        minutes: trainMinAway
    }



})
    
