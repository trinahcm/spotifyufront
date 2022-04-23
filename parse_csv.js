function parseCSVData(tn, ti, td) {
    const fs = require('fs');

    const artists_results = fs.readFileSync('artists.csv').toString().split(/\r\n|\n|\r/);
    const a_res = artists_results.map((line) => line.split(","));

    const artists_data = a_res.slice(1);

    const artists_name = [];
    const artists_id = [];

    for (var i = 0; i < artists_data.length; i++) {
        artists_name.push(artists_data[i][3]);
    }

    for (var i = 0; i < artists_data.length; i++) {
        artists_id.push(artists_data[i][0]);
    }

    //console.log(artists_data);

    const tracks_results = fs.readFileSync('tracks.csv').toString().split(/\r\n|\n|\r/);
    const t_res = tracks_results.map((line) => line.split(","));

    //td = t_res.slice(1);

    for (var i = 1; i < t_res.length; i++) {
        td.push(t_res[i]);
    }

    // const tracks_name = [];
    // const tracks_id = [];
    //console.log(td)

    for (var i = 0; i < td.length; i++) {
        tn.push(td[i][1]);
    }

    for (var i = 0; i < td.length; i++) {
        ti.push(td[i][0]);
    }
}

function displaySong(song, tn, td) {
    var j;
    var trackID;
    var danceability;
    var energy;
    var loudness;
    for (var i = 0; i < tn.length; i++) {
        if (tn[i] == song) {
            j = i;
        }
    }

    trackID = td[j][0];
    danceability = td[j][8];
    energy = td[j][9];
    loudness = td[j][11];

    //console.log("ID: ", trackID, " Danceability: ", danceability, " Energy: ", energy, " Loudness: ", loudness);
}

var tracks_name = [];
var tracks_id = [];
var tracks_data = [];

parseCSVData(tracks_name, tracks_id, tracks_data);
 //console.log(tracks_data)
displaySong('drivers license', tracks_name, tracks_data);


// const artists_name = [];
// const artists_id = [];

// module.exports = { tracks_data, tracks_name };
// module.exports.parseCSVData = parseCSVData;
