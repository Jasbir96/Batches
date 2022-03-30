// Setup
const recordCollection = {
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
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
   if(value==""){
   delete records[id][prop];
   }else if(prop!="tracks"&&value!=""){
     records[id][prop]=value
   }else if(prop=="tracks"&&records[id][prop]==undefined){
     let arr=[];
     arr.push(value);
     records[id]["tracks"]=arr
   }else if(prop=="tracks"&&records[id][prop]!=undefined){
     records[id][prop].push(value);
   }
  
    return records;
  }


  
  //0
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  //1
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
//   2
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");

  updateRecords(recordCollection, 2468, "tracks", "Free");
  updateRecords(recordCollection, 2548, "artist", "");
  updateRecords(recordCollection, 2548, "tracks", "");
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
  console.log(recordCollection);