async function fetchingAllExpenses(){

    try{
        const results = await fetch('/api/v1/expenses')
        const { data } = await data.json()

        generateUI(data);

    } catch(error) {}
}



function generateUI(data){

    const expensesContainer = document.getElementById('expenses-container');
    expensesContainer.innerHTML = '';

    data.forEach(expense => {
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `
            <p>${expense.expenseLabel}<p>
            <p>$${expense.descriptionOrDate}</p>
            <p>${expense.category}</p>
            <p>${expense.amount}</p>
            <p>${expense.debitOrCredit}</p>
            <button onclick="editExpense('${expense._id}')">Edit</button>
            <button onclick="deleteExpense('${expense._id}')">Delete</button>
        `;
        expensesContainer.appendChild(div);
    });
}