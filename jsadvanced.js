// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//        setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//        },delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("green", 1000, () =>{
//         changeColor("blue", 1000)
//     }); 
// });



// OUR FIRST API REQUEST
// let url = "https://catfact.ninja/fact";

// fetch (url)
//  .then((res) => {
//     return res.json();
//  })
//  .then((data1) =>{
//     console.log("data 1 =",data1.fact);
//     return fetch (url);
//  })
//  .then((res) => {
//     return res.json();    
//  })
//  .then((data2) => {
//     console.log("data 2 =", data2.fact);
//  })
//  .catch((err) => {
//     console.log("ERROR -", err);
//  });
// USING FETCH WITH ASYNC- AWAIT
// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }

// AXIOS

// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");
 
// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//       return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         return "NO fact found";
//     }  
// }


// ACTIVITY USING QUERY STRINGS
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//    let colleges = await getColleges(country);
//    show(colleges);
// })
// function show(colleges) {
//     let list = document.querySelector("#result");
//     list.innerText = "";
//     for(coll of colleges){
//         console.log(coll.name);

//         let li = document.createElement("li");
//         li.innerText = coll.name;
//         list.appendChild(li);
//     }
//     document.querySelector("input").value = "";
// }

// async function getColleges(country) {
//     try{
//         let res = await axios.get(url + country);
//         return res.data; 
//     }
//     catch(err) {
//         console.log("Error :", err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=India&state-province=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
   let colleges = await getColleges(state);
   show(colleges);
})
function show(colleges) {
    let list = document.querySelector("#result");
    list.innerText = "";
    for(coll of colleges){
        console.log(coll.state);

        let li = document.createElement("li");
        li.innerText = coll.state;
        list.appendChild(li);
    }
    document.querySelector("input").value = "";
}

async function getColleges(state) {
    try{
        let res = await axios.get(url + state);
        return res.data; 
    }
    catch(err) {
        console.log("Error :", err);
    }
}