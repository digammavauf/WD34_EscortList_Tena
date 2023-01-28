let escortList = {
    boys: [],
    girls: [],
    everyone: [
        {
            id: 999,
            name: "John Philip Tena",
            age: 36,
            details: "KodeGo Student. Coder since 2003. Government Underemployed.",
            rate: 4500,
            image: "https://picsum.photos/seed/666/100/100",
            isSelected: false
        },
        {
            id: 888,
            name: "Jhomer Felecis",
            age: 25,
            details: "Business Owner. Privately employed as Administrative support.",
            rate: 3500,
            image: "https://picsum.photos/seed/888/100/100",
            isSelected: false
        },
        {
            id: 1,
            name: "Juan Dela Cruz",
            age: 19,
            details: "Top-A Student and Licensed Accupuncturist. Add 150 for extra service (hetero-sensual only).",
            rate: 5000,
            image: "https://picsum.photos/seed/1/100/100",
            isSelected: false
        },
        {
            id: 2,
            name: "Juana Dela Pwerta",
            age: 65,
            details: "Professional Nanny and Massage Therapist. She does not offer extra service.",
            rate: 8000,
            image: "https://picsum.photos/seed/2/100/100",
            isSelected: false
        },
        {
            id: 3,
            name: "Juanito Dela Gwardia",
            age: 45,
            details: "10-Year Security Guard. Add coffee for extra service (hetero- and homo-sensual).",
            rate: 10000,
            image: "https://picsum.photos/seed/3/100/100",
            isSelected: false
        },
        {
            id: 4,
            name: "Juanita Dela Tetas",
            age: 24,
            details: "Very attractive and a good enemy-distraction. For business personalities only. No extra service.",
            rate: 15000,
            image: "https://picsum.photos/seed/4/100/100",
            isSelected: false
        },
        {
            id: 5,
            name: "Juan Carlo Polla",
            age: 16,
            details: "Student and Theater Actor. No extra service.",
            rate: 2500,
            image: "https://picsum.photos/seed/5/100/100",
            isSelected: false
        },
        {
            id: 6,
            name: "Juana Carla Trasero",
            age: 75,
            details: "Traditional Cook. Mother of Tarzan. Add 1500 for extra service (all the way)",
            rate: 1500,
            image: "https://picsum.photos/seed/6/100/100",
            isSelected: false
        }
    ],
    showAllCards() {
        let html="";
        this.everyone.forEach(function(one){
            html+=`
<div id="${one.id}" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
<div class="card h-100">
<img src="${one.image}" alt="Image" class="card-image-top rounded-top">
<div class="card-body">
    <h3 class="card-title mb-1">${one.name}</h3>
    <h5 class="card-subtitle mb-2 text-muted">${one.age}</h5>
    <div class="card-text">${one.details}</div>
</div>
<div class="card-footer d-flex p-2 flex-wrap justify-content-around">
    <h1 class="card-text col-12">&#x20B1;${one.rate}/day</h1>
    <button class="btn btn-primary col-5" onclick="escortList.addToBoys('${one.id}', '${one.name}', '${one.age}', '${one.details}', '${one.rate}', '${one.image}', '${one.isSelected}')">Add to Boys</button>
    <button class="btn btn-danger col-5" onclick="escortList.addToGirls('${one.id}', '${one.name}', '${one.age}', '${one.details}', '${one.rate}', '${one.image}', '${one.isSelected}')">Add to Girls</button>
</div>
</div>
</div>
`;
        });
        document.querySelector("#allcards").innerHTML = html;
    },
    showBoysList() {
        let html="";
        this.boys.forEach(function(one){
            html+=`
<li class="list-group-item list-group-item-action mb-2 border-0 d-flex flex-row p-0 m-0 rounded justify-content-between" style="height: 44px;">
<img src="${one.image}" alt="Image" class="rounded-start h-100 me-2">
<div class="fs-5 mt-2">${one.name}, ${one.age}, &#x20B1;${one.rate}/day <a href="#" data-bs-toggle="modal" data-bs-target="#modal${one.id}"><i class="fa fa-question-circle" aria-hidden="true"></i></a></div>
<button class="btn btn-warning" onclick="escortList.removeFromBoysList('${one.id}', '${one.name}', '${one.age}', '${one.details}', '${one.rate}', '${one.image}', '${one.isSelected}')">Remove</button>
</li>
<div class="modal fade" id="modal${one.id}" tabindex="-1" aria-labelledby="modal${one.id}Label" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="modal${one.id}Label">${one.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        ${one.details}
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
</div>
</div>
</div>
`;
        });
        document.querySelector("#boyslist").innerHTML = html;
    },
    showGirlsList() {
        let html="";
        this.girls.forEach(function(one){
            html+=`
<li class="list-group-item list-group-item-action mb-2 border-0 d-flex flex-row p-0 m-0 rounded justify-content-between" style="height: 44px;">
<img src="${one.image}" alt="Image" class="rounded-start h-100 me-2">
<div class="fs-5 mt-2">${one.name}, ${one.age}, &#x20B1;${one.rate}/day <a href="#" data-bs-toggle="modal" data-bs-target="#modal${one.id}"><i class="fa fa-question-circle" aria-hidden="true"></i></a></div>
<button class="btn btn-warning" onclick="escortList.removeFromGirlsList('${one.id}', '${one.name}', '${one.age}', '${one.details}', '${one.rate}', '${one.image}', '${one.isSelected}')">Remove</button>
</li>
<div class="modal fade" id="modal${one.id}" tabindex="-1" aria-labelledby="modal${one.id}Label" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="modal${one.id}Label">${one.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        ${one.details}
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
</div>
</div>
</div>
`;
        });
        document.querySelector("#girlslist").innerHTML = html;
    },
    addToBoys(id, name, age, details, rate, image, isSelected) {
        let escort = { id: null, name: null, age: null, details: null, rate: null, image: null, isSelected: null };
        escort.id=id;
        escort.name=name;
        escort.age=age;
        escort.details=details;
        escort.rate=rate;
        escort.image=image;
        escort.isSelected=isSelected;
        let index = this.everyone.indexOf(escort);
        this.everyone.splice(index);
        escort.isSelected=true;
        this.boys.push(escort);
        this.showBoysList();
    },
    addToGirls(id, name, age, details, rate, image, isSelected) {
        let escort = { id: null, name: null, age: null, details: null, rate: null, image: null, isSelected: null };
        escort.id=id;
        escort.name=name;
        escort.age=age;
        escort.details=details;
        escort.rate=rate;
        escort.image=image;
        escort.isSelected=isSelected;
        let index = this.everyone.indexOf(escort);
        this.everyone.splice(index);
        escort.isSelected=true;
        this.girls.push(escort);
        this.showGirlsList();
    },
    removeFromBoysList(id, name, age, details, rate, image, isSelected) {
        let escort = { id: null, name: null, age: null, details: null, rate: null, image: null, isSelected: null };
        escort.id=id;
        escort.name=name;
        escort.age=age;
        escort.details=details;
        escort.rate=rate;
        escort.image=image;
        escort.isSelected=isSelected;
        let index = this.boys.indexOf(escort);
        this.boys.splice(index);
        escort.isSelected=false;
        this.everyone.push(escort);
        this.showAllCards();
    },
    removeFromGirlsList(id, name, age, details, rate, image, isSelected) {
        let escort = { id: null, name: null, age: null, details: null, rate: null, image: null, isSelected: null };
        escort.id=id;
        escort.name=name;
        escort.age=age;
        escort.details=details;
        escort.rate=rate;
        escort.image=image;
        escort.isSelected=isSelected;
        let index = this.girls.indexOf(escort);
        this.girls.splice(index);
        escort.isSelected=false;
        this.everyone.push(escort);
        this.showAllCards();
    },
    summarize() {
        let sum=0;
        this.boys.forEach(function(boy) {
            sum+=Number(boy.rate);
        });
        this.girls.forEach(function(girl) {
            sum+=Number(girl.rate);
        });
        if(sum>0) {
            document.querySelector("#summary").innerHTML = `
<div class="col-6 w-auto">
    <h3>Total Hire Rate: &#x20B1; ${sum}</h3>
    <h5>(Extra Service Fees Exluded)</h5>
</div>
<div class="col-6 w-auto">
    <button type="button" class="btn btn-success" onclick="if(confirm('You are about to be redirected to a paypal.me profile.')) location.href='https://paypal.me/digammavauf'">Checkout</button>
</div>
`;
        } else {
            document.querySelector("#summary").innerHTML = "";
        }
    }
}

function hideTarget(event, exempted) {
    if (event.target.tagName!="BUTTON") return;
    switch(exempted.getAttribute("class")) {
        case "row g-3":
            let card = event.target.parentNode.parentNode.parentNode;
            card.remove();
            break;
        case "list-group":
            let listItem = event.target.parentNode;
            listItem.remove();
            break;
    }
    escortList.summarize();
}

function showDetails(details) {
    document.querySelector("#escortDetails").modal('show');
}

escortList.showBoysList();
escortList.showGirlsList();
escortList.showAllCards();
escortList.summarize();