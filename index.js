//index page
let artistdetails=[{aname:"arjit",img:"../Images/arijit-singh.jpg",dob:"25 Apr 1987",songs:["muskurane ki wajah","Abaad Barbaad","han mai galat"],dates:[2016,2020,2019]},
            {aname:"ravi",img:"../Images/ravi-basrur.jpg",dob:"01 Jan 1984",songs:["sultaana","toofan","deerana","ugram veeram"],dates:[2016,2020,2019]},
            {aname:"aditi",img:"../Images/aditi.jpg",dob:"15 jan 2005",songs:["monstar","mahadav"],dates:[2022,2018]},
            {aname:"vijay",img:"../Images/Vijay-Prakash.jpg",dob:"21 Feb 1976",songs:["kaali quater","bombe helutte","adhyaksha"],dates:[2016,2019,2014]},
            {aname:"sanjit",img:"../Images/Sanjith-Hegde-Picture.jpg",dob:"3 Oct 1998",songs:["matte maleyaagide","maretu hoyite"],dates:[2019,2018]},
            {aname:"arman",img:"../Images/arman.jpg",dob:"22 Jul 1995",songs:["sariyagi nenapide","kushiyaagide"],dates:[2016,2016]}];

let x=0
let songdetails=document.getElementById("songdetails");
let artistbio=document.getElementById("artistbio");
function m1f(){
    if(x==0){
        artistdetails.map((a,b)=>{
            console.log(a);
            console.log(b);
            if(b<=4){
                let str1=document.createElement("tr")
                let std1=document.createElement("td")
                let simg1=document.createElement("img")
                simg1.src=a.img;
                simg1.alt="no imgage";
                std1.append(simg1);
                str1.append(std1);
                let std2=document.createElement("td")
                std2.innerHTML=a.songs[0];
                str1.append(std2);
                let std3=document.createElement("td")
                std3.innerHTML=a.dates[0];
                str1.append(std3);
                let std4=document.createElement("td")
                std4.innerHTML=a.aname;
                str1.append(std4);
                let std5=document.createElement("td")
                std5.innerHTML="rate"
                str1.append(std5);
                songdetails.append(str1);
                let atr1=document.createElement("tr");
                let atd1=document.createElement("td");
                atd1.innerHTML=a.aname;
                atr1.append(atd1);
                let atd2=document.createElement("td");
                atd2.innerHTML=a.dob;
                atr1.append(atd2);
                let atd3=document.createElement("td");
                atd3.innerHTML=a.songs.toString();
                atr1.append(atd3);
                artistbio.append(atr1);
            }
        })
    }
    x++;
}
//add song
let datalist=document.getElementById("data");
let list_div=document.createElement("div");
datalist.append(list_div);
function showartistf(){
    list_div.remove();
    list_div=document.createElement("div");
    artistdetails.map(a=>{ 
        let opt1=document.createElement("option");
        opt1.innerHTML=a.aname;
        list_div.append(opt1);
    })
    datalist.append(list_div);
}
function addsongf(){
    let songname=document.getElementById("songname");
    let year=document.getElementById("year");
    let artistname=document.getElementById("artistname");
    let imgurl=document.getElementById("imgurl");
    artistdetails.map((a)=>{
        if(a.aname==artistname.value){
            a.songs.push(songname.value);
            a.dates.push(year.value);
            if(imgurl){
                a.img=imgurl.value;
            }
        }
    })
    console.log(artistdetails);
}
//add artist
let addartist=document.getElementById("addartist");
function addartistf(){
    addartist.style.display="block"
}
function hideartistf(){
    addartist.style.display="none"
}
function newartistf(){
    let artname=document.getElementById("artname");
    let artdob=document.getElementById("dob");
    artistdetails.push({aname:artname.value,img:"",dob:artdob.value,songs:[],dates:[]})
}