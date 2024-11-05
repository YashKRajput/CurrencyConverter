const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_3AdlJF3m1k0h8n81fTTSl1gm01AfxAhN7szRj3sV"

const dropdown = document.querySelectorAll(".dropdown select")

for (let select of dropdown){
    for (let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
         else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
       
    }
    select.addEventListener("change" , (evt) =>{
        updatFlag(evt.target);
    }) 
}

const updatFlag = (element) =>{
    console.log(element);
};
