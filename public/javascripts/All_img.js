// Album based on mostly played songs 
const container1=[
    {imgname : `https://mosaic.scdn.co/640/ab67616d00001e02b3bc99e5781905ea29096b88ab67616d00001e02c8be540885e2abcce2e56822ab67616d00001e02ce40d6d2d9df156ceebe0086ab67616d00001e02d51647f66283a44532579cf7`
     , playlistName : "Japanese" },
    {imgname :"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da840c23e9b95c0ffddc3bcf0703"
    ,playlistName :"Best Japanese Anime Songs"},
    {imgname :"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c0a047ff7a15384532309b149"
    ,playlistName :"Popular Anime Songs"},
    {imgname :"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c46477bed09bbb3ca9b205913"
        ,playlistName :"Most Popular Japanese Songs All Time"},
    {imgname:"https://i.scdn.co/image/ab6765630000ba8ab6d9e7a0b3fa1d16ba1773d7"
        ,playlistName :"Anime Quotes | All i Know is grind"
    },
    {imgname :"https://mosaic.scdn.co/640/ab67616d00001e0243275240f8d72faac186400fab67616d00001e0269a2f8c65dc9e5abf160329bab67616d00001e027636e1c9e67eaafc9f49aefdab67616d00001e02deae7d931928fc1543e70203"
        ,playlistName :"English Mushup"},
    {imgname :"https://mosaic.scdn.co/640/ab67616d00001e023d1869d8c477d291a205a2d6ab67616d00001e02723eb72ca1182eb7acb40dfaab67616d00001e02c5716278abba6a103ad13aa7ab67616d00001e02cccf5d223349faaca1c9a1b9"
        ,playlistName :"Japanese Songs That just Hit different "},
    {imgname:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c28ec53549fcb64346be0a590"
        ,playlistName :"Japanese & Anime Songs..."
    }
]

let n=0;
const box222=document.querySelector(".box222");
// creating element for albums 
container1.forEach((ele)=>{  
        let odiv111=document.createElement("div");

        // this is for odiv111 
        let img1=document.createElement("img");
        img1.src=ele.imgname;
        let odiv1111=document.createElement("div");
        odiv1111.appendChild(img1);
        odiv1111.classList.add("w-12");
        let text1=document.createElement("span");
        text1.textContent=ele.playlistName;
        text1.classList.add("text-white","text-sm","font-bold");
        let odiv1112=document.createElement("div");
        odiv1112.appendChild(text1);
        odiv1112.classList.add("w-40")
         
        odiv111.appendChild(odiv1111);
        odiv111.appendChild(odiv1112);
        odiv111.classList.add("flex","space-x-2","h-16","w-60","hover:bg-slate-700","cursor-pointer");
        box222.appendChild(odiv111);
});
box222.classList.add("grid","grid-cols-4")

// object for "Made for Tushar Dhakad"
const made_for_you=[
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebcb6926f44f620555ba444fca/en"
        , artists :"Pritam , Vishal-Shekar, Sachin-jigar and more"
    },
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eba837a6cb82dd949d5e1f9b53/en"
        ,artists : "Anuv Jain, The Local Train,AUR and more"
    },
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5ebc9d443fb5ced1dd32d106632/en"
        ,artists :"RADWIMPS,EGOIST,miwa and more"
    },
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/4/ab6761610000e5eb03c18f700f0e327701ef0f62/en"
        ,artists :"J Trix ,GAUSH,Kaam Bhaari and more"
    },
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5ebe1b2fcb302f55c7413281bd4/en"
        ,artists :"CLOVES,Bruno Merz,Rosemary & Garlic..."
    },
    {imgname :"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/6/ab6761610000e5eb00fb251be747b9ce9dba31a5/en"
        ,artists : "Violette Zironi,Aaron Krause, Old Sea..."
    },
    {imgname :"https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb8094cf9aa2f6ed775614c073/en"
        ,artists : "Catch all the Latest music from artists you follow"
    }
]

// fuction to create a div for each element in the array and return it 
function builder(element) {
    let m1=document.createElement("div");
    let img=document.createElement("img");
    img.src=element.imgname;
    let div1=document.createElement("div");
    div1.appendChild(img);
    div1.classList.add("w-40")

    let text=document.createElement("span");
    text.textContent=element.artists;
    text.classList.add("text-white");
    let div2=document.createElement("div");
    div2.appendChild(text);

    m1.appendChild(div1);
    m1.appendChild(div2);
    m1.classList.add("hover:bg-slate-700","cursor-pointer","p-2","space-y-1")
    return m1;
};


let box2232=document.querySelector(".box2232");
// call the function for each element in the array and append the returned div to the box2232 div
made_for_you.forEach(element=>{
    box2232.appendChild(builder(element));
})

// object for "Your to mix"
const your_to_mix=[
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/folk_acoustic/3MuPVbFDynbq9zRTAqjRxi/en/default"
        , artists : "Max,Jury,Bob Dylan,Violetta Zironi and more"
    },
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/romantic/4wwYGgSpeBtvk5WX6HBqzw/en/default"
        , artists : "Aditya A,Vishal Mishra, Anuv Jain and more"
    },
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/moody/3TOhzLRYnkkul71yRBxIoM/en/default"
        , artists : "Akhil Sachdeva,Abdul Hannan,Anuv jain and..."
    },
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/0Nl4kTPLk2ucrARvaf55zQ/en/default"
        , artists : "Jokhay,Tallah Yunus,J Trix and more"
    },
    { imgname :"https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/4YRxDV8wJFPHPTeXepOstw/en/default"
        , artists :"Arijit Singh,moumoon,Armaan Malik and more"
    },
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/j_pop/4kpQdAU7yPjqtiJsFcBTBb/en/default"
        , artists : "Rokudenashi,EGOIST,Eve and more"
    },
    {imgname :"https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/5jTtGLk1mGFMY5lQOvJYUj/en/default"
        ,artists : "boa,Vishal-Shekhar,Aqua Timez and more"
    }
]


let box2242=document.querySelector(".box2242");
// call the function for each element in the array and append the returned div to the box2242 div
your_to_mix.forEach(element=>{
    box2242.appendChild(builder(element));
})
