

// this is event listener for all,music and podcast button right on the top
const all=document.querySelector(".all");
const music=document.querySelector(".music");
const podcasts=document.querySelector(".podcasts");
all.addEventListener("click",function(){
    if(all.classList.contains("bg-gray-700")){
        all.classList.remove("bg-gray-700");
        all.classList.remove("text-white");
        all.classList.add("bg-white");
        all.classList.add("text-black");
      }
       if(music.classList.contains("bg-white")){
        music.classList.remove("bg-white");-
        music.classList.remove("text-black");
        music.classList.add("bg-gray-700");
        music.classList.add("text-white");
       }
       if(podcasts.classList.contains("bg-white")){
        podcasts.classList.remove("bg-white");
        podcasts.classList.remove("text-black");
        podcasts.classList.add("bg-gray-700");
        podcasts.classList.add("text-white");
       }
});
music.addEventListener("click",function(){
    if(all.classList.contains("bg-white")){
        all.classList.remove("bg-white");
        all.classList.remove("text-black");
        all.classList.add("bg-gray-700");
        all.classList.add("text-white");
      }
       if(music.classList.contains("bg-gray-700")){
        music.classList.remove("bg-gray-700");
        music.classList.remove("text-white");
        music.classList.add("bg-white");
        music.classList.add("text-black");
       }
       if(podcasts.classList.contains("bg-white")){
        podcasts.classList.remove("bg-white");
        podcasts.classList.remove("text-black");
        podcasts.classList.add("bg-gray-700");
        podcasts.classList.add("text-white");
       }
})
podcasts.addEventListener("click",function(){
    if(all.classList.contains("bg-white")){
        all.classList.remove("bg-white");
        all.classList.remove("text-black");
        all.classList.add("bg-gray-700");
        all.classList.add("text-white");
    }
       if(podcasts.classList.contains("bg-gray-700")){
        podcasts.classList.remove("bg-gray-700");
        podcasts.classList.remove("text-white");
        podcasts.classList.add("bg-white");
       podcasts.classList.add("text-black");
       }
       if(music.classList.contains("bg-white")){
        music.classList.remove("bg-white");
        music.classList.remove("text-black");
        music.classList.add("bg-gray-700");
        music.classList.add("text-white");
       }
})


