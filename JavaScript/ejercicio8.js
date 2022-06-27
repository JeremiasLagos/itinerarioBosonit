const mesures = ( val ) => {
  let readables = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let count = 0

  if(val < -1000 || val > 1000){
    if(val < 0){
      val *= -1
      var negative = true
    }
    while(val > 1024){
      val /=1000
      count ++
    }
    if(negative){
      val *= -1
      return (val) + readables[count]
    } else{
      return val + readables[count]
    }    
  } else{
    return val + readables[count]
  }
}

console.log("resultado: " + mesures(10000000))