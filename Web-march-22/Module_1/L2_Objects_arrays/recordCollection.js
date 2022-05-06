let recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function getValues(recordCollection, id, prop) {
    console.log(recordCollection[id][prop]);
}
getValues(recordCollection, 5439, "albumTitle");
getValues(recordCollection, 2468, "tracks");


// update Records
function updateRecords(records, id, prop, value) {
    // 
    if (value == "") {
        // delete prop
        delete records[id][prop];
    }
    else if (prop != "tracks") {
        // object update ya create
        records[id][prop] = value;
    }
    else if (prop == "tracks" && records[id][prop] == undefined) {
        // tracks array create and value put
        let newArr = [value];
        records[id][prop] = newArr;
    }
    else if (prop == "tracks") {
        // tracks update
        let tracksArr = records[id][prop];
        // last array thing add
        tracksArr.push(value);
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');