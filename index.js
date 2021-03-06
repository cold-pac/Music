
let defaultSynth = new Tone.Synth(); //create a new Synth
defaultSynth.toMaster();  //connect mySynth to the master output (my speakers)

function playNote (pitch) {
    defaultSynth.triggerAttackRelease(pitch, "16n");
}

let fmSynth = new Tone.Oscillator().toMaster();

function Oscillator () {
    if (fmSynth.state === "started") {
        fmSynth.stop();
    } else {
        fmSynth.start();
    }
}

let sawtoothOscillator = new Tone.Oscillator(400, "sawtooth6").toMaster();

function plawSaw () {
    if (sawtoothOscillator.state === "started") {
        sawtoothOscillator.stop();
    } else {
        sawtoothOscillator.start();
    }
}


var noiseSynth = new Tone.MetalSynth().toMaster();

function playMetalNote () {

    noiseSynth.triggerAttackRelease(300, 0.5, 0);
    noiseSynth.triggerAttackRelease(400, 0.5, 1);
    noiseSynth.triggerAttackRelease(500, 0.5, 2);
    noiseSynth.triggerAttackRelease(600, 0.5, 3);
    noiseSynth.triggerAttackRelease(700, 0.5, 4);
    noiseSynth.triggerAttackRelease(800, 0.5, 5);

}


let chordSynth1 = new Tone.Synth().toMaster();
let chordSynth2 = new Tone.Synth().toMaster();
let chordSynth3 = new Tone.Synth().toMaster();

function playCChord (time) {
    chordSynth1.triggerAttackRelease("C4", "16n", time);
    chordSynth2.triggerAttackRelease("E4", "16n", time);
    chordSynth3.triggerAttackRelease("G4", "16n", time);
}

function playGChord (time) {
    chordSynth1.triggerAttackRelease("G4", "16n", time);
    chordSynth2.triggerAttackRelease("B4", "16n", time);
    chordSynth3.triggerAttackRelease("D4", "16n", time);
}

function playEmChord (time) {
    chordSynth1.triggerAttackRelease("E4", "16n", time);
    chordSynth2.triggerAttackRelease("G4", "16n", time);
    chordSynth3.triggerAttackRelease("B4", "16n", time);
}

function playDChord (time) {
    chordSynth1.triggerAttackRelease("D4", "16n", time);
    chordSynth2.triggerAttackRelease("F4", "16n", time);
    chordSynth3.triggerAttackRelease("A4", "16n", time);
}


var synth = new Tone.Synth().toMaster();

let grabArr = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
let lengthArr = ['4n', '1m', '2m', '8n.', '8n', '8t'];
let counter, counter2;
function triggerSynth(time){
    counter = Math.floor(Math.random()*grabArr.length);
    counter2 = Math.floor(Math.random()*lengthArr.length);
    console.log(counter);
    synth.triggerAttackRelease(grabArr[counter], lengthArr[counter2], time);
}

let Melody1 = () => {
    Tone.Transport.schedule(triggerSynth, 0);
    Tone.Transport.schedule(playCChord, 0);
    Tone.Transport.schedule(triggerSynth, '0.5');
    Tone.Transport.schedule(triggerSynth, '1');
    Tone.Transport.schedule(playCChord, '1');
    Tone.Transport.schedule(triggerSynth, '2');
    Tone.Transport.schedule(playDChord, '2');
    Tone.Transport.schedule(triggerSynth, '3');
    Tone.Transport.schedule(playDChord, '3');
    Tone.Transport.schedule(triggerSynth, '3.5');
    Tone.Transport.schedule(triggerSynth, '4');
    Tone.Transport.schedule(playEmChord, '4');
    Tone.Transport.schedule(triggerSynth, '5');
    Tone.Transport.schedule(playEmChord, '5');
    Tone.Transport.schedule(triggerSynth, '6');
    Tone.Transport.schedule(playGChord, '6');
    Tone.Transport.schedule(triggerSynth, '7');
    Tone.Transport.schedule(playGChord, '7');


    /*
    REMEMBER: TONE.TRANSPORT accepts only strings = seconds, or 4n = quarter note, 8n = eight note 8t = eighth note triplet
    '4hz' = 0.25 seconds
    '32:2:1' = 'bars:beats:sixteenths' (ableton live)
    */

    Tone.Transport.loopEnd = '8';
    Tone.Transport.loop = true;
};

let base1 = new Tone.PolySynth().toMaster();

base1.set(
    {
        "envelope" : {
            "attack" : 0.01,
            "decay": 0.10,
            "sustain": 0.10,
            "release": 1.20
        },
        "oscillator" : {
            "type": "sine"
        }
    }
);


let snare = new Tone.PolySynth().toMaster();

snare.set(
    {
        "envelope" : {
            "attack" : 0.01,
            "decay": 0.10,
            "sustain": 0.10,
            "release": 1.20
        },
        "oscillator" : {
            "type": "sine"
        }
    }
);

let poly1 = new Tone.PolySynth().toMaster();

poly1.set(
    {
        "envelope" : {
            "attack" : 0.01,
            "decay": 0.10,
            "sustain": 0.10,
            "release": 1.20
        },
        "oscillator" : {
            "type": "sine"
        }
    }
);

let tones = ['C5', 'E5', 'F5'], indexTone;
function randomTone (time) {
    indexTone = Math.floor(Math.random()*tones.length);
    poly1.triggerAttackRelease(tones[indexTone], '1m', time);
}

let membraneSynth1 = new Tone.MembraneSynth({
    pitchDecay : 0.05 ,
    octaves : 10 ,
    oscillator : {
        "type": "sine"
    } ,
    envelope : {
        attack : 0.26 ,
        decay : 0.12 ,
        sustain : 0.97 ,
        release : 0.01 ,
    }
}).toMaster();


let membraneSynth2 = new Tone.MembraneSynth({
    pitchDecay : 0.05 ,
    octaves : 10 ,
    oscillator : {
        "type": "sine",
    } ,
    envelope : {
        attack : 0.1,
        decay : 0.4 ,
        sustain : 0.97 ,
        release : 0.01 ,
    }
}).toMaster();

function baseBeat (time) {
    base1.triggerAttackRelease('C3', '4n', time);
}

function snareHit (time) {
    snare.triggerAttackRelease('C3', '8t', time);
}

function kick (time) {
    membraneSynth1.triggerAttackRelease('C1', '4n', time);
}

function tom (time) {
    membraneSynth2.triggerAttackRelease('C3', '8t', time);
}

let Beat1 = () => {
    Tone.Transport.schedule(randomTone, 0);
    Tone.Transport.schedule(baseBeat, 0);
    Tone.Transport.schedule(kick, 0);
    Tone.Transport.schedule(snareHit, '1');
    Tone.Transport.schedule(tom, '1');
    Tone.Transport.schedule(baseBeat, '2');
    Tone.Transport.schedule(baseBeat, '2.5');
    Tone.Transport.schedule(kick, '2');
    Tone.Transport.schedule(kick, '2.5');
    Tone.Transport.schedule(snareHit, '3');
    Tone.Transport.schedule(tom, '3');



    Tone.Transport.loopEnd = '4';
    Tone.Transport.loop = true;
};



