$(document).ready(() => {

    let drumSounds = {
        "Q": {
            "name": "Head Punch",
            "url": "http://www.denhaku.com/r_box/sr16/sr16bd/headpnch.wav"
        },
        "W": {
            "name": "Kick",
            "url": "http://soundcavern.free.fr/kick/kick008.wav"
        },
        "E": {
            "name": "Hard House",
            "url": "https://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hard%20House%20Kick%2026-9441-Free-Loops.com.mp3"
        },
        "A": {
            "name": "Snare",
            "url": "http://bigsamples.free.fr/d_kit/snare/909_snr3.wav"
        },
        "S": {
            "name": "Rimshot", 
            "url": "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/16-rimshot%20snare.wav"
        },
        "D": {
            "name": "Conga Drum", 
            "url": "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/34-low%20conga%20slap.wav"
        },
        "Z": {
            "name": "Bass Drum", 
            "url": "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/10-electronic%20kick2.wav"
        },
        "X":{
            "name": "Snare Drum - Brush Hit", 
            "url": "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/18-brush%20hit%20snare.wav"
        },
        "C": {
            "name": "Korg Snare Drum", 
            "url": "https://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Snare%20Drum%202-2535-Free-Loops.com.mp3"
        },
    }

    let pianoSounds = {
        "Q": {
            "name": "Drip Sound",
            "url": "https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3"
        },
        "W": {
            "name": "Duck Sound",
            "url": "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"
        },
        "E": {
            "name": "Chord",
            "url": "http://www.chiptape.com/chiptape/sounds/medium/MidwayGauntletG010.WAV"
        },
        "A": {
            "name": "Piano Note",
            "url": "http://www.elektrorevue.cz/clanky/99011/klav.wav"
        },
        "S": {
            "name": "Sidetone", 
            "url": "http://www.w2sjw.com/sounds/MDC_Sidetone.mp3"
        },
        "D": {
            "name": "Phone tone", 
            "url": "http://cd.textfiles.com/sbup/SOUNDS/PHONETO1.WAV"
        },
        "Z": {
            "name": "Piano Key C8", 
            "url": "https://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piano%20Key%20C8-2877-Free-Loops.com.mp3"
        },
        "X":{
            "name": "Fire", 
            "url": "http://starmen.net/mother2/soundfx/fire1.wav"
        },
        "C": {
            "name": "Quack", 
            "url": "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/1/quack.wav"
        },
    }

    for (let key of Object.keys(drumSounds)) {
        $("#" + key.toLowerCase() + "-key").click(() => {
            if ($("#power").is(":checked") == true) {

                if ($("#bank").is(":checked") == false) {

                    $("#display").html("<b>" + drumSounds[key].name + "</b>");
                    $("#" + key).attr("src", drumSounds[key].url);
                    $("#" + key).trigger('play');
                    $("#" + key).on('ended', ()=> {
                        $("#display").html("<b></b>");
                    });
                } else {

                    $("#display").html("<b>" + pianoSounds[key].name + "</b>");
                    $("#" + key).attr("src", pianoSounds[key].url);
                    $("#" + key).trigger('play');
                    $("#" + key).on('ended', ()=> {
                        $("#display").html("<b></b>");
                    });
                }
            } else {
                window.alert("Please switch on the power button.");
            }
        });
    }

    $(document).keypress(function(event) {
        var keyCode = (event.keyCode ? event.keyCode : event.which);
        if (keyCode == "81" || keyCode == "113") {
            $("#q-key").click();

        } else if (keyCode == "87" || keyCode == "119") {
            $("#w-key").click();
        } else if (keyCode == "69" || keyCode == "101") {
            $("#e-key").click();
        } else if (keyCode == "65" || keyCode == "97") {
            $("#a-key").click();
        } else if (keyCode == "83" || keyCode == "115") {
            $("#s-key").click();
        } else if (keyCode == "68" || keyCode == "100") {
            $("#d-key").click();
        } else if (keyCode == "90" || keyCode == "122") {
            $("#z-key").click();
        } else if (keyCode == "88" || keyCode == "120") {
            $("#x-key").click();
        } else if (keyCode == "67" || keyCode == "99") {
            $("#c-key").click();
        }
    })
});