const images = [
  'https://picsum.photos/id/0/1600/1200',
  'https://picsum.photos/id/1/1600/1200',
  'https://picsum.photos/id/2/1600/1200',
  'https://picsum.photos/id/3/1600/1200',
  'https://picsum.photos/id/4/1600/1200',
  'https://picsum.photos/id/5/1600/1200'
]

  
const preloadedImages = [];

images.forEach((url) => {
  const img = new Image();
  img.src = url;
  preloadedImages.push(img);
});
const img = document.querySelector('#image');
const nextbtn = document.querySelector('#next');
const prevbtn = document.querySelector('#prev');
const dots = document.querySelector('#dots');
images.forEach((img,idx)=>{
  const span = document.createElement('span');
  span.classList.add('circle');
  span.id = idx;
  dots.appendChild(span);
});



function updateDots(idx){
  //remove current class from all

  //add current to idx
  dots.childNodes.forEach((node,id)=>{
    node.classList.remove('current');
    if(id==idx){
      node.classList.add('current');  
    }
  });

}

function startCarousel(currId){
  imageIdx = currId;
  return setInterval(()=>{
  imageIdx++;
  if(imageIdx==images.length){
    imageIdx = 0;
  }
  img.src = preloadedImages[imageIdx].src;
  updateDots(imageIdx)
},1500);
}

img.src=preloadedImages[0].src;
let imageIdx=0;
updateDots(0)
let interval = startCarousel(imageIdx);

dots.addEventListener('click',(e)=>{
  let id = e.target.id;
  if(!id) return;
  clearInterval(interval);
  img.src = preloadedImages[id].src;
  updateDots(id)
  interval = startCarousel(id);
})

nextbtn.addEventListener('click',(e)=>{
  clearInterval(interval);
  imageIdx++;
  if(imageIdx==images.length){
    imageIdx = 0;
  }
  img.src = preloadedImages[imageIdx].src;
  updateDots(imageIdx)
  interval = startCarousel(imageIdx)
});

prevbtn.addEventListener('click',(e)=>{
  clearInterval(interval);
  imageIdx--;
  if(imageIdx<0){
    imageIdx = images.length-1;
  }
  img.src = preloadedImages[imageIdx].src;
  updateDots(imageIdx)
  interval = startCarousel(imageIdx)
});




