const userdetail =
{
    Id:null,
    username:null,
    email:null

}

function fun(){
    var x = document.getElementById("myText").value;
    if(x>10 || x==0)
    {
        alert("Invalid data")
    }
   

fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(data =>{
    let arr=data;
    let y=arr[x-1];
    
    userdetail.Id=y.id;
    userdetail.username=y.name;
    userdetail.email=y.email;
    
    let z=document.getElementById("content");
    
    let one=document.getElementById("one");
    let two=document.getElementById("two");
    let three=document.getElementById("three");
    
   
        one.innerText="Id : " + userdetail.Id;
        two.innerText="Name : "+userdetail.username
        three.innerText="Email : "+userdetail.email
    
        
    z.appendChild(one)
    z.appendChild(two)
    z.appendChild(three)


    
})

}


