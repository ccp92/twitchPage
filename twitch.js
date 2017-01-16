function getTwitch() {	
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2', function (info) {
        var statusSc;
        var gameSc = 'n/a';
        if (info.stream === null) {
            statusSc = 'Offline';
        } else if (info.stream === undefined) {
            statusSc = 'Dead';
        } else {
            statusSc = 'Online';
            gameSc = info.stream.game;
            var previewSc = info.stream.preview.medium;
            var infoSc = info.stream.channel.status;
        }
        console.log('ESL_SC2: ' + statusSc);
        console.log(previewSc);
        console.log(infoSc);
        
        $('#sc-status').text(statusSc+': '+infoSc);
        $('#sc-game').text(gameSc);
        $('#sc-preview').attr('src',previewSc);
    })
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/a_seagull', function (info) {
        var statusSeagull;
        var gameSeagull = 'n/a';
        if (info.stream === null) {
            statusSeagull = 'Offline';
        } else if (info.stream === undefined) {
            statusSeagull = 'Dead';
        } else {
            statusSeagull = 'Online';
            gameSeagull = info.stream.game;
            var previewSeagull = info.stream.preview.medium;
            var infoSeagull = info.stream.channel.status;
        }
        console.log('A_Seagull: '+statusSeagull);

        $('#seagull-status').text(statusSeagull+': '+infoSeagull);
        $('#seagull-game').text(gameSeagull);
        $('#seagull-preview').attr('src',previewSeagull);
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
        }

        $('#status').text(status+': '+info);
        $('#game').text(game);
        $('#preview').attr('src',preview);
    })
};