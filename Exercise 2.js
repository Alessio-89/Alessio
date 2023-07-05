const calculateWaterConsumption = (time) => {
    let waterPerHour = 0.5;
    let waterDrunk = Math.floor(time * waterPerHour);
    return waterDrunk;
  }
  
  console.log(calculateWaterConsumption(4)); //prints 2