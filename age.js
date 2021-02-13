const dobInput = document.querySelector("#dob");
dobInput.focus();
let tense = "will be";
document.querySelector("#dob").addEventListener("blur", () => {
    const dobString = dobInput.value;
    const dobArray = dobString.split("-");
    const dobValue = Date.UTC(dobArray[0], parseInt(dobArray[1]) - 1, dobArray[2]);
    const bday = new Date(dobValue);
    const twentyKDayValue = dobValue + (20000 * 24 * 60 * 60 * 1000);
    const twentyKDay = new Date(twentyKDayValue);
    if (twentyKDayValue < Date.now()) tense = "was";
    document.querySelector("#bornOn").innerHTML = bday.toDateString();
    document.querySelector("#tense").innerHTML = tense;
    document.querySelector("#twentyK").innerHTML = twentyKDay.toDateString();
    document.querySelector("#output").style.display = "block";
    document.querySelector("#input").style.display = "none";
})
