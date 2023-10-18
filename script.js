

let textme = document.getElementById("textme")
let upper = document.getElementById("upper")
let lower = document.getElementById("lower")
let upper_with_out_space = document.getElementById("upper_with_out_space")
let lower_with_out_space = document.getElementById("lower_with_out_space")
let remove_space = document.getElementById("remove_space")



let replaceword = document.getElementById("replaceword")



upper.addEventListener("click" , function(){
    textme.value = textme.value.toUpperCase().replace("/-/g","")
})

lower.addEventListener("click" , function(){
    textme.value = textme.value.toLowerCase().replace(/-/g," ")
})

upper_with_out_space.addEventListener("click" , function(){
    textme.value = textme.value.toUpperCase().replace(/ /g,"-")
})

lower_with_out_space.addEventListener("click" , function(){
    textme.value = textme.value.toLowerCase().replace(/ /g,"-")
})

remove_space.addEventListener("click" , function(){
    textme.value = textme.value.replace(/\s/g, "")
})





replaceword.addEventListener("click" , function(){
    let find = document.getElementById("find")
    let replace = document.getElementById("replace")
    
    textme.value =  textme.value.replaceAll(find.value, replace.value)

    // textme.value = textme.value.match(find.value).replaceAll(find.value, replace.value)
})