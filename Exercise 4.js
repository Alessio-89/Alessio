const calculateCapital = () => {
    let investment = parseFloat(alert("Amount to invest?"));
    let interest = parseFloat(alert("Annual percentage interest?"));
    let years = parseInt(alert("Years?"));

    //here I'm asking the user for the initial investment, the interest rate and the number of years.
  
    let capital = investment;
  
    for (let year = 1; year <= years; year++) {
      capital += capital * (interest / 100);
      // this loop adds the interest rate to the initial investment.
      alert("Capital after " + year + " years: " + capital.toFixed(2) + "€");
      // this shows the user the value of their investment after X years. The toFixed method limits the decimals to two.
    }
  }
  
  calculateCapital();