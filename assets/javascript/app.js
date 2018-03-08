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
    // var trainMinAway = $("#min-away").val().trim()
    console.log(response)

    database.push({
        name: trainName,
        destination: trainDes,
        frequency: trainFreq,
        arrival: trainArrival,

    })

    // var newTrain = {
    //     minutes: trainMinAway
    // }
})

database.ref().on("child_added", function(snap) {
    var trainFrequency = snap.val().frequency
    var dateConvert = moment(snap.val().arrival, 'hh:mm').subtract(1, "years")
    var trainTime = moment(dateConvert).format("HH:mm")
    var now = moment()
    var firstConvert = moment(trainTime, 'hh:mm').subtract(1, "years")
    var timeDifference = moment().diff(moment(firstConvert), "minutes")
    var remainingTime = timeDifference % trainFrequency
    var tMinus = trainFrequency - remainingTime
    var nextTrain = moment().add(tMinus, "minutes").format("HH:mm")

    

  //append DOM
  $("#trainSchedule").append("<tr><td>" + snap.val().name + "</td><td>" +
  snap.val().destination + "</td><td>" + snap.val().frequency +
  "</td><td>" + trainTime + "</td><td>" + tMinus + "</td></tr>")
  },function(errorObject) {
  })
// })
    
