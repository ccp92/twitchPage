function getTwitch() {	
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2', function (info) {
        var statusSc;
        if (info.stream === null) {
            statusSc = 'Offline';
        } else if (info.stream === undefined) {
            statusSc = 'Dead';
        } else {
            statusSc = 'Online';
        }
        
        console.log('ESL_SC2: ' + statusSc);
        if (statusSc === 'Online') {
            gameSc = info.stream['game'];
        } else {
            gameSc = 'n/a';
        }
        
        $('#sc-status').text(statusSc);
        $('#sc-game').text(gameSc);
    })
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/a_seagull/?callback=?', function (info) {
        var statusSeagull;
        if (info.stream === null) {
            statusSeagull = 'Offline';
        } else if (info.stream === undefined) {
            statusSeagull = 'Dead';
        } else {
            statusSeagull = 'Online';
        }
        console.log('A_Seagull: '+statusSeagull);
        if (statusSeagull === 'Online') {
            gameSeagull = info.stream['game'];
        } else {
            gameSeagull = 'n/a';
        }
        $('#seagull-status').text(statusSeagull);
        $('#seagull-game').text(gameSeagull);
    })
};

getTwitch();

function buttonTwitch() {
    var search = document.getElementById('streamer').value;
    console.log(search);
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+search+'/?callback=?', function(info) {
        var status;
        if (info.stream===null) {
            status = 'Offline';
        } else if (info.stream===undefined) {
            status = 'Dead';
        } else {
            status = 'Online';
        }
        if (status === 'Online') {
            game = info.stream['game'];
        } else {
            game = 'n/a';
        }
        $('#status').text(status);
        $('#game').text(game);
    })
};