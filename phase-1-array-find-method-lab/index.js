const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superBowlWinningRecord(record){
   if(record.result === "W"){
    console.log(record.year) 
   } else(record.result !== "W"){
    return undefined;
   }
  }
  