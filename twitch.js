function getTwitch() {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2', function (info) {
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
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/a_seagull', function (info) {
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

getTwitch();

function buttonTwitch() {
    var search = document.getElementById('streamer').value;
    console.log(search);
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+search, function(info) {
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
};