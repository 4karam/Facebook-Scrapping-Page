let mainDiv = document.body.querySelector('div[data-pagelet="ProfileTimeline"]')?.children;
let data = [];
async function pushData() {
  if(mainDiv && mainDiv.length > 0){
    for (let i = 0; i < mainDiv.length; i++) {
      mainDiv[i].scrollIntoView();
      await new Promise(res => setTimeout(res, 10));
      let name = mainDiv[i]?.querySelector('span.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs')?.textContent || null;
      let postContent = mainDiv[i]?.querySelector('div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs.x126k92a')?.textContent || 'No Content';
      let like = mainDiv[i]?.querySelector("span.xt0b8zv.x1jx94hy.xrbpyxo.xl423tq")?.textContent || '0 likes';
      let comment = mainDiv[i]?.querySelector("div[class='x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w xeuugli xg83lxy x1h0ha7o x10b6aqq x1yrsyyn']")?.textContent || '0 Comments ';
      if (name === null) continue;
      data.push({
        name: name.trim(),
        content: postContent.trim(),
        comment: comment.trim(),
        like: like.trim()
      });
  }
  if(btn2){
      container.removeChild(btn2);
    }
    btn.style.color = "#fff";
    btn.disabled = false;
    btn.style.backgroundColor = "#1877f2";
    btn.innerText = "Start collecting posts";
    save();
  } 
}

function save() {
  let json = JSON.stringify(data, null, 2); 
  let file = new Blob([json], { type: "application/json" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = "pages.json";
  a.click();
  URL.revokeObjectURL(a.href);
}



let timerId;
let stop = false;
async function start() {
  btn.style.cursor = "wait";
  btn.disabled = true;
  btn.style.backgroundColor = "#04AA6D";
  btn.innerText = "Collecting posts ";
  if(stop === true){
    clearTimeout(timerId);

  }else{
  if (window.scrollY + window.innerHeight + 1 >= document.body.scrollHeight) {
    clearTimeout(timerId);
    await pushData();
  } else {
    window.scrollBy({
      top:  Math.floor(Math.random() * 101) + 200, 
      left: 0,  
      behavior: "smooth" 
    });;
    timerId = setTimeout(start, 200); 
  }}
}
let container = document.createElement("div");
container.style.position = "fixed";
container.style.right = "10px";  
container.style.bottom = "10px"; 
container.style.zIndex = 9999;
container.style.display = "flex"; 
container.style.gap = "10px"; 
document.body.appendChild(container);
let btn2 = document.createElement("button");
let btn = document.createElement("button");
btn.id = "btnScrapperByk4.RM";
btn.innerText = "Start collecting posts";
btn.style.padding = "10px";
btn.style.backgroundColor = "#1877f2";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.onclick = () => {
  if (confirm("Ready to start collecting posts?")) {
    btn2.id = "btnScrapperByk4.RMstop";
    btn2.innerText = "Stop collecting posts";
    btn2.style.padding = "10px";
    btn2.style.backgroundColor = "#1877f2";
    btn2.style.color = "#fff";
    btn2.style.border = "none";
    btn2.style.borderRadius = "5px";
    btn2.style.cursor = "pointer";
    btn2.onclick = () => {
      stop = true;
      pushData();
    };
    container.appendChild(btn2);
    start(); 
  }
};

container.appendChild(btn);
