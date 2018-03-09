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

  $("#inputForm").on("submit", function(event) {
    event.preventDefault()

    var trainName = $("#train-name").val().trim()
    var trainDes = $("#train-dest").val().trim()
    var trainFreq = $("#train-frequency").val().trim()
    var trainArrival = $("#train-arrival").val().trim()
    // var trainMinAway = $("#min-away").val().trim()

    database.ref().push({
        name: trainName,
        destination: trainDes,
        frequency: trainFreq,
        arrival: trainArrival,

    })
    $("#train-name, #train-dest, #train-frequency, #train-arrival").val("")
    // var newTrain = {
    //     minutes: trainMinAway
    // }
})

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    
    var newTrain = childSnapshot.val().trainName
    var newDest = childSnapshot.val().trainDes
    var newFreq = childSnapshot.val().trainFreq
    var newTime = childSnapshot.val().trainArrival

    var firstConvert = moment(newTime, "hh:mm").subtract(1, "years")

    var now = moment()

    var timeDifference = moment().diff(moment(firstConvert), "minutes")

    var remainingTime = timeDifference % newFreq

    var tMinus = newFreq - remainingTime

    var nextTrain = moment().add(tMinus, "minutes")

    var getTrain = moment(nextTrain).format("HH:mm")


//   $("#trainSchedule").append("<tr><td>" + snap.val().name + "</td><td>" +
//   snap.val().destination + "</td><td>" + snap.val().frequency +
//   "</td><td>" + trainTime + "</td><td>" + tMinus + "</td></tr>")
$('#train').append("<p>"+newTrain+ "</p>")
$('#destination').append("<p>"+newDest+ "</p>")
$('#frequency').append("<p>"+newFreq+ "</p>")
$('#arrival').append("<p>"+getTrain+ "</p>")
$('#away').append("<p>"+tMinus+ "</p>")
})
// })
    
