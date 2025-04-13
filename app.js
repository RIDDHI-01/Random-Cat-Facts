
let url="https://catfact.ninja/fact";
// let url2="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
     let fact=await getFacts();
 })
async function getFacts(){
    try{
         let res=await axios.get(url);
         let p=document.querySelector("#answer");
         console.log(res.data.fact);
         p.innerText=res.data.fact;
         return res.data.fact;
     }
     catch(e){
         console.log("ERROR!!!");
         return "No Fact found!";
     }
 }