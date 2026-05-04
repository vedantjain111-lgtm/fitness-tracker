function loadData() {
    let data = JSON.parse(localStorage.getItem("fitness")) || [];
    let table = document.getElementById("data");
    table.innerHTML = "";

    data.forEach(entry => {
        let row = `<tr>
            <td>${entry.date}</td>
            <td>${entry.weight}</td>
            <td>${entry.calories}</td>
            <td>${entry.workout}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

function addEntry() {
    let date = document.getElementById("date").value;
    let weight = document.getElementById("weight").value;
    let calories = document.getElementById("calories").value;
    let workout = document.getElementById("workout").value;

    let data = JSON.parse(localStorage.getItem("fitness")) || [];

    data.push({ date, weight, calories, workout });

    localStorage.setItem("fitness", JSON.stringify(data));

    loadData();
}

window.onload = loadData;