function submitStats() {
  // Initialize variables to keep track of the most points, rebounds, and assists
  var maxPoints = -Infinity;
  var maxRebounds = -Infinity;
  var maxAssists = -Infinity;
  var playerWithMostPoints = '';
  var playerWithMostRebounds = '';
  var playerWithMostAssists = '';

  // Loop through each player to gather stats and find the maximums
  for (var i = 1; i <= 15; i++) {
    var playerName = document.getElementById('player-name' + i).value;
    var assists = parseInt(document.getElementById('assists' + i).value);
    var points = parseInt(document.getElementById('points' + i).value);
    var rebounds = parseInt(document.getElementById('rebounds' + i).value);
    
    // Update maximum points, rebounds, and assists if necessary
    if (points > maxPoints) {
      maxPoints = points;
      playerWithMostPoints = playerName;
    }
    if (rebounds > maxRebounds) {
      maxRebounds = rebounds;
      playerWithMostRebounds = playerName;
    }
    if (assists > maxAssists) {
      maxAssists = assists;
      playerWithMostAssists = playerName;
    }
  }

  // Display pop-up with players who had the most points, rebounds, and assists
  var message = 'Player with the most points: ' + playerWithMostPoints + '\n' +
                'Player with the most rebounds: ' + playerWithMostRebounds + '\n' +
                'Player with the most assists: ' + playerWithMostAssists;
  alert(message);
}

function searchPlayers() {
  var input, filter, playerNameInputs, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  playerNameInputs = document.querySelectorAll('[id^=player-name]');

  playerNameInputs.forEach(function(input) {
    txtValue = input.value.toUpperCase();
    var playerStats = input.parentElement.parentElement;
    if (txtValue.indexOf(filter) > -1) {
      playerStats.style.display = '';
    } else {
      playerStats.style.display = 'none';
    }
  });
}
