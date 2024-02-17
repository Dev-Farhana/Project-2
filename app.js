let products = [
    {name:"Chair", title : "Soft Like Cloud", price: "1500" , Image : "https://images.unsplash.com/photo-1569597970494-29fe318c2595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"Pink Chair", title : "Soft Like Cloud", price: "1000" , Image : "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"White Chair", title : "Soft Like Cloud", price: "10,000" , Image : "https://plus.unsplash.com/premium_photo-1683134025734-c9fbb1f351e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fHww"},
    {name:"Home", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1571247865791-9d7ed2ddf033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fHww"},
    {name:"Appliancess", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww"},
    {name:"Accessories-Home", title : "Soft Like Cloud", price: "10,000" , Image : "https://plus.unsplash.com/premium_photo-1683134216649-0f37150de33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbWUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Interior", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1564540583246-934409427776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Home-Interior", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Home-Interior", title : "Soft Like Cloud", price: "10,000" , Image : "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvbWUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D"}
];

let popular = [
    {name:"Eyes Lounge", title : "Bisco Do Lobo", price: "1500" , Image : "https://images.unsplash.com/photo-1559310839-62ea9d2e37cd?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Pink Chair", title : "Soft Like Cloud", price: "1000" , Image : "https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Eyes Lounge", title : "Bisco Do Lobo", price: "10,000" , Image : "https://plus.unsplash.com/premium_photo-1683141429357-d14b4548e1ea?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "popular", title: "Leaves", price: "500", Image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

let cart = [];

function addProduct(){   
    let clutter = "";
    products.forEach((product, index) =>{
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"> 
            <img class="w-full h-full object-cover" src="${product.Image}" alt="">
        </div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight"> ${product.name} </h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.title} </h3>
                        <h4 class="font-semibold mt-2">$ ${product.price} </h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i></button>
                </div>
            </div>
        </div> ` ;
    })
    document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts(){
    let clutter = " ";
    popular.forEach((product)=>{
        clutter += `<div class="popular bg-white p-4 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white ">
                <img class="w-full h-full object-cover"  src="${product.Image}"  alt="">
            </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold"> ${product.name} </h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20"> ${product.title} </h4>
                <h4 class="mt-3 font-semibold text-zinc-500">$ ${product.price} </h4>
            </div>
     </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if(details.target.classList.contains("add")){
            console.log(details.target.dataset);
            cart.push(products[details.target.dataset.index])
        }
    } )
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        let clutter = " ";
        cart.forEach(function(prod,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg" >
                <div class="w-2/4 h-20 flex-shrink-0 rounded-lg overflow-hidden" >
                    <img class="w-full h-full object-cover" src="${prod.Image}" alt="">
                </div>
                <div>
                    <h3 class="font-semibold" > ${prod.name} </h3>
                    <h5 class="text-sm font-semibold opacity-80" > $${prod.price} </h5>
                </div>
          </div> `;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter ;
    })
}

showCart();
addToCart();
addPopularProducts();
addProduct();
