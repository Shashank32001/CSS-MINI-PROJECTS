var titlearray=[
    {
        name:"Shashank",
        Email:"shahan@gmail.com",
        occupation:"Financer"
                
    },
    {
        name:"Akbar",
        Email:"akbar@gmail.com",
        occupation:"Engineer"

    },
    {
        name:"Azad",
        Email:"azad@gmail.com",
        occupation:"Self-Employment"
    },
    {
        name:"Arman",
        Email:"arman@gmail.com",
        occupation:"Doctor"
    },
    {
        name:"Aadil",
        Email:"aadil@gmail.com",
        occupation:"Teacher"
    },
    {
        name:"Rahmat",
        Email:"Rahmat@gmail.com",
        occupation:"Builder"
    },
    {
        name:"Hero",
        Email:"hero@gmail.com",
        occupation:"Software-Engineer"
    },
    {
        name:"Nasir",
        Email:"nasir@gmail.com",
        occupation:"Saler"
                
    },
    {
        name:"Sahil",
        Email:"sahil@gmail.com",
        occupation:"Trader"
                
    },
    {
        name:"Sonu",
        Email:"sonu@gmail.com",
        occupation:"Business"
                
    },
];



var dynamic = document.querySelector('.container');

for (var i= 0; i < titlearray.length; i++){

    var fetch1 = document.querySelector('.container').innerHTML;
    
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">
                            <div class="box-content">
                                <h3>Name: ${titlearray[i].name}</h3> 
                                <p>Email: ${titlearray[i].Email}</p>
                                <p>Occupation:${titlearray[i].occupation}</p>
                                <div class="btn">
                                <button type="button" onclick="onEdit()">Edit</button>
                                <button type="button" onclick="onDelete()">Delete</button>
                                </div>
                            </div>
                        </div>` + fetch1 ;
    
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url("./assets/img/${titlearray[i].name}.jpg")`;
    
    // function onEdit(){
        var paragraph = document.querySelector('.container');
        function onEdit(){
        paragraph. contentEditable = true;
        paragraph. style. backgroundColor = "#dddbdb";
        };
    // }

    function onDelete(){
        prompt("You want to Delete your Content");
        document.querySelector('.container').innerHTML= '';
    }
}