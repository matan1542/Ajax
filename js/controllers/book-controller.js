

function onInit() {
    getDetails(renderList)
}

function renderList(personList) {
    const elPersonDiv = document.querySelector('.display-books');

    let strHtmls = personList.map((person) => {

        return `
        <div class="card">
        <div class="row-header flex">
        <label">${person.fName},${person.lName}</label>
        </div>
        <div class="row-details flex">
        <div class="person-img"><img src="https://robohash.org/${person.fName}?set=set5"></div>
        <div class="person-details flex">
            <div class="row flex">
                <label>Business Address: </label>   
                <p>${person.business}</p]>                    
            </div>
            <div class="row flex">
                <label>Work Phone: </label>   
                <p>${person.workPhone}</p]>                    
            </div>
            <div class="row flex">
                <label>Living Address: </label>   
                <p>${person.livingAddress}</p]>                    
            </div>
            <div class="row flex">
                <label>E-mail Address: </label>   
                <p>${person.email}</p]>                    
            </div>
        </div>
    </div>
</div>`
    })
    elPersonDiv.innerHTML = strHtmls.join('');
}


