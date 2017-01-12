function getTwitch() {	
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2/?callback=?', function (info) {
        var statusSc;
        if (info.stream === null) {
            statusSc = 'Offline';
        } else if (info.stream === undefined) {
            statusSc = 'Dead';
        } else {
            statusSc = 'Online';
        }
        $('#sc-status').text(statusSc);
        console.log(statusSc);
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
        $('#seagull-status').text(statusSeagull);
        console.log(statusSeagull);
    })
};

getTwitch();

function buttonTwitch() {
    var search = document.getElementById('#streamer');
    console.log(search);
};

$('#submit').click(buttonTwitch());