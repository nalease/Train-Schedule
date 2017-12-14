  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKRRL2ZOUyQKCoP1_f_gIro3smXxtsTxc",
    authDomain: "train-schedule-10ee9.firebaseapp.com",
    databaseURL: "https://train-schedule-10ee9.firebaseio.com",
    projectId: "train-schedule-10ee9",
    storageBucket: "",
    messagingSenderId: "34210617444"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = $('#train-name').val().trim();
  var destination = $('#destination').val().trim();
  var firstTrain= $('#first-train').val().trim();
  var frequency= $('#frequency').val().trim();

  $('#submit').on('click', function(event){
    event.preventDefault();

    database.ref().push({
      name: trainName,
      destination: destination,
      train: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  });

  database.ref().on('submit', function(snapshot) {
    
    var snapV = snapshot.val();

    console.log(snapV.name);
    console.log(snapV.destination);
    console.log(snapV.train);
    console.log(snapV.frequency);

  });