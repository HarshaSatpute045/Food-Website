var arr=[{
    dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" ,story:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww"},
{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D" ,story:"https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fHww"},


{dp:"https://media.istockphoto.com/id/2149636775/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=5s1_LaEW1YZjywvlIDFzKgZzXdtDP7P3y4e0nx8k5o8=" ,story:"https://media.istockphoto.com/id/2149636751/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ajjZiP6hVzsKfXJWHKiYya9990FJekJSrfEdNhIQEI="},


{dp:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0eWxlfGVufDB8fDB8fHww" ,story:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFufGVufDB8fDB8fHww"},


]


var storiya=document.querySelector("#storiya")

var clutter=""

arr.forEach(function(elem,idx)
{
    clutter+= `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">

        </div>
 `
})
storiya.innerHTML=clutter;

storiya.addEventListener("click",function(dets)
{
document.querySelector("#full-screen").style.display="block"

document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;




setTimeout(function()
{
document.querySelector("#full-screen").style.display="none"
},3000)
})