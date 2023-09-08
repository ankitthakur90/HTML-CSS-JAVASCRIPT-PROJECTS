
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));


tabBtn.addEventListener("click", function (){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        randerLeads(myLeads)
    });
   
});


if(localStorageLeads){
   myLeads = localStorageLeads;
   randerLeads(myLeads);
}


function randerLeads(leads) {
    let listItem = "";
    for (let i = 0; i < myLeads.length; i++) {

        // ulEl.innerHTML  += "<li>" + myLeads[i] + "</li>";

       // listItem += "<li><a target='_blank' href='" + myLeads[i]  + "' >"+ myLeads[i] + "</a></li>";
          
       listItem += `
            <li>
                <a target='_blank' href='${myLeads[i]}' >
                  ${myLeads[i]}
                </a>
            </li>
     
            `;

    }
    ulEl.innerHTML = listItem;
}



deleteBtn.addEventListener("click",function () {

    localStorage.clear();
    myLeads = [];
    randerLeads(myLeads);
});





inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value);
    inputEl.value =" ";

    localStorage.setItem("myLeads",JSON.stringify(myLeads));
     
    randerLeads(myLeads);
   
});

