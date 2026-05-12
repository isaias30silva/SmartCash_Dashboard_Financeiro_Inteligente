const transactionForm = document.querySelector("#transaction-form");

const transactionNameInput = document.querySelector("#transaction-name");

const transactionAmountInput = document.querySelector("#transaction-amount");

const transactions = [];

function convertAmountToNumber(value) {
  return Number(value);
}

function validateForm(name, amount) {
  if (name.trim() === "") {
    alert("Por favor, informe uma descrição.");
    return false;
  }

  if (transactionAmountInput.value.trim() === "") {
    alert("Por favor, informe um valor.");
    return false;
  }

  if (isNaN(amount)) {
    alert("O valor informado é inválido.");
    return false;
  }

  return true;
}

function createTransaction(name, amount) {
  return {
    id: Date.now(),
    name: name,
    amount: amount,
  };
}

function addTransaction(transaction) {
  transactions.push(transaction);

  console.log("Nova transação adicionada:");
  console.table(transactions);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const transactionName = transactionNameInput.value;

  const transactionAmount = convertAmountToNumber(transactionAmountInput.value);

  const isFormValid = validateForm(transactionName, transactionAmount);

  if (!isFormValid) {
    return;
  }

  const newTransaction = createTransaction(transactionName, transactionAmount);

  addTransaction(newTransaction);

  console.log("Transação criada:");
  console.log(newTransaction);

  clearFormInputs();
}

function clearFormInputs() {
  transactionNameInput.value = "";
  transactionAmountInput.value = "";

  transactionNameInput.focus();
}

transactionForm.addEventListener("submit", handleFormSubmit);
