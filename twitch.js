function setHeader(xhr) {
  xhr.setRequestHeader('Accept','application/vnd.twitchtv.v5+json');
  xhr.setRequestHeader('Client-ID','APIkey');
};

$(document).ready( function() {
  getTwitch();
  //getUser('ryanmacg');
  //userArray();
  
  function getTwitch() {
//    debugger
    var scUser = getUser('esl_sc2');
    console.log('user getTwitch', scUser);
        $.getJSON('https://api.twitch.tv/kraken/channels/esl_sc2?client_id=APIkey', function (channel) {
            var logoSc = channel.logo;
            $('#sc-logo').attr('src',logoSc);
        });
        var statusSc;
        var gameSc = 'n/a';
		var previewSc;
		var infoSc;
        if (info.stream === null) {
            statusSc = 'Offline';
        } else if (info.stream === undefined) {
            statusSc = 'Dead';
        } else {
            statusSc = 'Online';
            gameSc = info.stream.game;
            previewSc = info.stream.preview.medium;
            infoSc = info.stream.channel.status;
			$('#sc-status').text(statusSc+': '+infoSc);
        	$('#sc-game').text(gameSc);
        	$('#sc-preview').attr('src',previewSc);
        }
        console.log('ESL_SC2: ' + statusSc);
        console.log(previewSc);
        console.log(infoSc);
    })

    $.getJSON('https://api.twitch.tv/kraken/streams/a_seagull?client_id=APIkey', function (info) {
        $.getJSON('https://api.twitch.tv/kraken/channels/a_seagull?client_id=APIkey', function (channel) {
            var logoSeagull = channel.logo;
            $('#seagull-logo').attr('src',logoSeagull);
        });
        var statusSeagull;
        var gameSeagull = 'n/a';
		var previewSeagull;
		var infoSeagull;
        if (info.stream === null) {
            statusSeagull = 'Offline';
        } else if (info.stream === undefined) {
            statusSeagull = 'Dead';
        } else {
            statusSeagull = 'Online';
            gameSeagull = info.stream.game;
            previewSeagull = info.stream.preview.medium;
            infoSeagull = info.stream.channel.status;
			$('#seagull-status').text(statusSeagull+': '+infoSeagull);
			$('#seagull-game').text(gameSeagull);
        	$('#seagull-preview').attr('src',previewSeagull);
        }
        console.log('A_Seagull: '+statusSeagull);
    })
  };
  
  function getStreamer(streamerId) {
    $.ajax ({
      dataType: 'json',
      url: 'https://api.twitch.tv/kraken/users/'+streamerId,
      beforeSend: setHeader
    }).done(function(user) {
      console.log(user)
      var table = document.getElementById('users-table');
      var newRow = table.insertRow(2);
      var newCell = newRow.insertCell(0);
      var newText = document.createTextNode('New top row');
      newCell.appendChild(newText);
      console.log("A", user._id)
    })

    debugger

    // $.ajax({
    //   dataType:'json',
    //   url: 'https://api.twitch.tv/kraken/streams/'+info.users[0]._id,
    //   beforeSend: setHeader
    // }).done(function(foo) {
    //   console.log(foo);
    // })
  }

  

  function buttonTwitch() {
    var search = document.getElementById('streamer').value;
    console.log(search);
    $.getJSON('https://api.twitch.tv/kraken/streams/'+search+'?client_id=APIkey', function(info) {
        var status;
        var game = 'n/a';
        if (info.stream===null) {
            status = 'Offline';
        } else if (info.stream===undefined) {
            status = 'Dead';
        } else {
            status = 'Online';
            game = info.stream.game;
            var preview = info.stream.preview.medium;
            var info = info.stream.channel.status;
			$('#game').text(game);
        	$('#preview').attr('src',preview);
        }
			$('#status').text(status+': '+info);

    })
    var streamerArray = userArray();
    streamerArray.push(search);
    console.log(streamerArray);
};


  function getUser(streamer) {
      getId(streamer);
      // getStreamer(streamerId);
  }
  
  function getId(streamer) {
    $.ajax({
        dataType:'json',
        url:'https://api.twitch.tv/kraken/users?login='+streamer,
        beforeSend: setHeader
    })
    .done(function(info) {
      getStreamer(info.users[0]._id);
    });
  }



function userArray () {
    var streamerArray = [];
    var allSpans = document.getElementsByClassName('anchor');

    for (var i=0; i < allSpans.length; i++) {
        streamerArray.push(allSpans[i].innerHTML);
    }
    return streamerArray;
}
});