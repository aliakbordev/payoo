document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = document.getElementById("account-balance");
    const currentBalance = parseInt(balance.innerText);
    const amountField = document.getElementById("input-cash-out");
    const amount = parseInt(amountField.value);
    const pinNumber = parseInt(
      document.getElementById("input-cash-out-pin").value
    );

    if (pinNumber == 5 && amount > 0) {
      const newBalance = currentBalance - amount;
      balance.innerText = newBalance;

      amountField.value = "";
    } else {
      alert("Incorrect PIN or amount");
      amountField.value = "";
    }
  });
