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

// all song and artist for Library section
const LibTopBar=document.querySelector(".LibTopBar");
const Libraray=document.querySelector(".Library");
const playlistLib_container=[
    {imgname : `/playlist/liked.png`, playlistName : "Liked Songs" , playlistLabel : "20 songs"},
      {imgname :`/playlist/english.png`, playlistName : "English Mushup" , playlistLabel : "The_tushar_dhakad"},
      {imgname :`/playlist/hindi.png`, playlistName : " ...." , playlistLabel : "The_tushar_dhakad"},
      {imgname :`/playlist/japanese.png`, playlistName : " Japanese" , playlistLabel : "The_tushar_dhakad"},
      {imgname : `/playlist/punjabi.png`, playlistName : "Decent Punjabi Songs" , playlistLabel : "The_tushar_dhakad"},
]
const artistLib_container=[
    {imgname : `/artists/anuv_jain.png`, artistName : "Anuv Jain" , artistLabel :  "Artist"},
    {imgname : `/artists/arijit.png`, artistName : "Arijit Singh" , artistLabel :  "Artist"},
    {imgname : `/artists/carryMinati.png`, artistName : "Carry Minati" , artistLabel :  "Artist"},
    {imgname : `/artists/Eminem.png`, artistName : "Eminem" , artistLabel :  "Artist"},
    {imgname : `/artists/Emiway_Bantai.png`, artistName : "Emiway Bantai" , artistLabel :  "Artist"},
    {imgname : `/artists/justin_biber.png`, artistName : "Justin Bieber" , artistLabel :  "Artist"},
]

// function for appending playlist
function appendPlaylist(element){
    const Pdiv=document.createElement("div");
    const divC1=document.createElement("div");
    const divC2=document.createElement("div");
    
    //for first Child
    let img=document.createElement("img");
    img.src=element.imgname;
    divC1.appendChild(img);
    divC1.classList.add("w-14")

    //for second Child 
    // for second sub child no 1
     let divC2c1=document.createElement("div");
    
    // playlist Name h2 tag
    let playlisname=document.createElement("h2");
    playlisname.classList.add("text-white");
    playlisname.textContent=element.playlistName;
    divC2c1.appendChild(playlisname)

   // for second sub child no 2
    const divC2C2=document.createElement("div");
    const contentType=document.createElement("h3")
    contentType.textContent="Playlist .";
    contentType.classList.add("text-slate-300");
    const created_by=document.createElement("h3")
    created_by.textContent=element.playlistLabel;
    created_by.classList.add("text-slate-300");
    divC2C2.appendChild(contentType);
    divC2C2.appendChild(created_by);
    divC2C2.classList.add("flex","space-x-2")
    // second child 
    divC2.classList.add("flex","flex-col","space-y-2");
    divC2.appendChild(divC2c1);
    divC2.appendChild(divC2C2);

   // mainbox
   Pdiv.appendChild(divC1);
   Pdiv.appendChild(divC2);

   // mainbox Styeling
   Pdiv.classList.add("flex","space-x-2","p-2","w-full","hover:bg-slate-700");
   Pdiv.id=element.playlistName.toLowerCase()
   return Pdiv;
}

// function for appending artist
function appendAritist(element){
    const Adiv=document.createElement("div");
    const divC1=document.createElement("div");
    const divC2=document.createElement("div");

    // for first container 
    let img=document.createElement("img");
    img.src=element.imgname;
    divC1.appendChild(img);
    divC1.classList.add("w-14");

    // for second container
    let artistname=document.createElement("h2");
    artistname.textContent=element.artistName;
    artistname.classList.add("text-white");
    let artistlabel=document.createElement("h3");
    artistlabel.textContent=element.artistLabel;
    artistlabel.classList.add("text-slate-400");
    
    divC2.appendChild(artistname);
    divC2.appendChild(artistlabel);
    divC2.classList.add("flex","flex-col","space-y-1");

    // insert to main container 
    Adiv.appendChild(divC1);
    Adiv.appendChild(divC2);
    Adiv.classList.add("flex","space-x-2","p-2","w-full","hover:bg-slate-700",)
    Adiv.id=element.artistName.toLowerCase()
    return Adiv;
}

// appending playlist
playlistLib_container.forEach(element=>{
   Libraray.appendChild(appendPlaylist(element));
})
// appending artist
artistLib_container.forEach(element=>{
    Libraray.appendChild(appendAritist(element));
});
// calculating how many artist and how many playlist 
let artistLib_container_size=artistLib_container.length;
console.log(artistLib_container_size)
let playlistLib_container_size=playlistLib_container.length;
console.log(playlistLib_container_size);

// this is for Libraray section 
// here we add event listener on playlist and artist button
const buttoncrossLib=document.querySelector(".buttonCrossLib");
const playlistLib=document.querySelector(".playlistLib");
const artisteLib=document.querySelector(".artisteLib");
const byyouLib=document.querySelector(".byyouLib");

// creating event listener playlist button on library section
const playlistLibClickEvent = function(){
    buttoncrossLib.classList.remove("hidden");
    artisteLib.classList.add("hidden");
    byyouLib.classList.remove("hidden");
    playlistLib.classList.remove("bg-zinc-700");
    playlistLib.classList.remove("text-white");
    playlistLib.classList.add("bg-white");
    playlistLib.classList.add("text-black");
    // remove all artists when you click playlsit section 
    for(let i=0;i<artistLib_container_size;++i){
        Libraray.removeChild(Libraray.lastChild);
    }
    playlistLib.removeEventListener("click",playlistLibClickEvent);
}
playlistLib.addEventListener("click",playlistLibClickEvent);

// creating event listener artist button on library section
const artisteLibClickEvent = function(){
    buttoncrossLib.classList.remove("hidden");
    playlistLib.classList.add("hidden");
    artisteLib.classList.remove("bg-zinc-700");
    artisteLib.classList.remove("text-white");
    artisteLib.classList.add("bg-white");
    artisteLib.classList.add("text-black");
    // remove all playlist when you click artist section
    for(let i=0;i<(playlistLib_container_size);++i){
        Libraray.removeChild(Libraray.children[1]);
    }
    artisteLib.removeEventListener("click",artisteLibClickEvent);
}
artisteLib.addEventListener("click",artisteLibClickEvent);

buttoncrossLib.addEventListener("click",function(){
    if(artisteLib.classList.contains("hidden")){
        artisteLib.classList.remove("hidden");
        playlistLib.classList.remove("bg-white");
        playlistLib.classList.remove("text-black");
        playlistLib.classList.add("bg-zinc-700");
        playlistLib.classList.add("text-white");
        byyouLib.classList.add("hidden");
        artistLib_container.forEach(element=>{
            Libraray.appendChild(appendAritist(element));
        })
        playlistLib.addEventListener("click",playlistLibClickEvent);
    }
    if(playlistLib.classList.contains("hidden")){
        playlistLib.classList.remove("hidden");
        artisteLib.classList.remove("bg-white");
        artisteLib.classList.remove("text-black");
        artisteLib.classList.add("bg-zinc-700");
        artisteLib.classList.add("text-white");
        const queue=[];
        playlistLib_container.forEach(element=>{
               queue.push(appendPlaylist(element));
        })
        let size=queue.length;
        for(let i=size-1;i>=0;--i){
            Libraray.insertBefore(queue[i],Libraray.firstChild.nextSibling.nextSibling)
        }
        artisteLib.addEventListener("click",artisteLibClickEvent);
    }
    buttoncrossLib.classList.add("hidden");
})

// this is for enable search bar by clicking on search logo in Library section
let searchLibLogo=document.querySelector("#searchLibLogo");
let searchLibInput=document.querySelector(".searchLibInput");
let recentLib=document.querySelector(".recentLib");
let Libcontainer=document.querySelector(".Libcontainer");
searchLibLogo.addEventListener("click",function(){
    searchLibInput.classList.remove("hidden");
    recentLib.classList.add("hidden");
    Libcontainer.classList.remove("ml-48");
    // Libcontainer.classList.add("ml-2");
})
searchLibInput.addEventListener("mouseout",function(){
    searchLibInput.classList.add("hidden");
    recentLib.classList.remove("hidden");
    Libcontainer.classList.add("ml-48");
})

// when we click library logo then all the library section will going to collapgse 
let imgLib=document.querySelector(".imgLib");
// let box2section=document.querySelector(".box222");
imgLib.addEventListener("click",function(){
    let box1=document.querySelector(".box21");
    let sbox1=box1.children[0];
    let sbox2=box1.children[1];
    let sbox3=box1.children[2];
    if(!sbox2.classList.contains("hidden")){
        for(let i=1;i<3;++i){
            let element=sbox1.children[i];
            element.classList.add("hidden");
        }
        let ssbox1=sbox1.children[0];
        ssbox1.children[1].classList.add("hidden");
        sbox2.classList.add("hidden");
        sbox3.children[0].classList.add("hidden");
        for(let i=1;i<=(artistLib_container_size+playlistLib_container_size);++i){
           let element= sbox3.children[i];
           element.children[1].classList.add("hidden");
        }
        sbox3.classList.remove("h-[450px]");
        sbox3.classList.add("h-[500px]");
        sbox3.classList.remove("w-96");
        sbox3.classList.add("w-full");
        box2232.classList.remove("w-[1060px]");
        box2242.classList.remove("w-[1060px]");
        box2232.classList.add("w-[1355px]");
        box2242.classList.add("w-[1355px]");
    }
    else{
        for(let i=1;i<3;++i){
            let element=sbox1.children[i];
            element.classList.remove("hidden");
        }
        let ssbox1=sbox1.children[0];
        ssbox1.children[1].classList.remove("hidden");
        sbox2.classList.remove("hidden");
        sbox3.children[0].classList.remove("hidden");
        for(let i=1;i<=(artistLib_container_size+playlistLib_container_size);++i){
           let element= sbox3.children[i];
           element.children[1].classList.remove("hidden");
        }
        sbox3.classList.remove("h-[500px]");
        sbox3.classList.add("h-[450px]");
        sbox3.classList.remove("w-full");
        sbox3.classList.add("w-96");
        box2232.classList.add("w-[1060px]");
        box2242.classList.add("w-[1060px]");
        box2232.classList.remove("w-[1355px]");
        box2242.classList.remove("w-[1355px]");
    }
})


// this is for + section buttion in Library section
let buttonPlusLib=document.querySelector(".buttonPlusLib");
let createPlaylistLib=document.querySelector(".createPlaylistLib");
buttonPlusLib.addEventListener("click",function(){
    if(createPlaylistLib.classList.contains("hidden")){
        createPlaylistLib.classList.remove("hidden");
    }
    else{
        createPlaylistLib.classList.add("hidden");
    }
});

// search button for library section makeing that functional 
searchLibInput.addEventListener("input",function(){
    let value = searchLibInput.value.trim().toLowerCase();
    let count=0;
    console.log(value);
    artistLib_container.forEach(element=>{
        let e=element.artistName.toLowerCase()
        let make_hidden=document.getElementById(`${e}`)
        if(!( e.includes(value))){
            make_hidden.classList.add("hidden")
            ++count;
        } 
        else{
            if(make_hidden.classList.contains("hidden")){
                make_hidden.classList.remove("hidden")
                --count;
            }
        }
    })
    playlistLib_container.forEach(element=>{
        let e=element.playlistName.toLowerCase()
        let make_hid=document.getElementById(`${e}`)
        if(!(e.includes(value))){
            make_hid.classList.add("hidden")
            ++count;
        }
        else{
            if(make_hid.classList.contains("hidden")){
                make_hid.classList.remove("hidden")
                --count;
            }
        }
    })
    if(value===""){
        for(let i=0;i<artistLib_container_size+playlistLib_container_size+1;++i){
           let element=Libraray.children[i]
           if(element.classList.contains("hidden")){
            element.classList.remove("hidden")
          }
        }
        if(!(ele.classList.contains("hidden"))){
            ele.classList.add("hidden")
        }
     }
})

// recent button for library section
const Librecent=document.querySelector(".LibRecent");
const LibRecentOptions=document.querySelector(".LibRecentOptions");
Librecent.addEventListener("click",function(){
    if(LibRecentOptions.classList.contains("hidden")){
        LibRecentOptions.classList.remove("hidden");
    }
    else{
        LibRecentOptions.classList.add("hidden");
    }
})
//
let ProfileLogo=document.querySelector(".ProfileLogo");
let UserOptions=document.querySelector(".UserOptions");
ProfileLogo.addEventListener("click",function(){
    if(UserOptions.classList.contains("hidden")){
        UserOptions.classList.remove("hidden");
    }
    else{
        UserOptions.classList.add("hidden");
    }
})