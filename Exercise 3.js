//This is the first version I made.

const showYearsReached = () => {
    let age = parseInt(prompt("How old are you?"));
  
    if (isNaN(age) || age <= 0) {
      alert("Please enter a positive number.");
      return;
    }
  //user gets an error message if they enter an invalid age.
    let yearsReached = ""; //empty string.
    for (let i = 1; i <= age; i++) {
      yearsReached += i + " ";
    }
    //with the loop, each year is added to the yearsReached string, separated by a space.
    
    alert("Years reached: " + yearsReached);
  };
  
  showYearsReached();



  //I also made an alternative version that doesn't ask the user, but takes the current age as a parameter.

  const showYearsReached = (currentAge) => {
  
    if (isNaN(currentAge) || currentAge <= 0) {
      alert("Please enter a positive number.");
      return;
    }
  //user gets an error message if they enter an invalid age.
    let yearsReached = ""; //empty string.
    for (let i = 1; i <= currentAge; i++) {
      yearsReached += i + " ";
    }
    //with the loop, each year is added to the yearsReached string, separated by a space.

    alert("Years reached: " + yearsReached);
  };
  
  showYearsReached(33);
  