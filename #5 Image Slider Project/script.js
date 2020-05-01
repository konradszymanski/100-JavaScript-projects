var images  = [{img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Bodiam-castle-10My8-1197.jpg"},
               {img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Balmoral_Castle.jpg"},
               {img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hunedoara_castle.jpg"},
               {img: "https://i.redd.it/wpn9t2egd7cy.png"},
               {img: "https://vinenvacances.com/wp-content/uploads/2018/12/Carcasonne-round-1024x768.jpg"}];
var element = document.getElementById("container");
function next(direction){
  var index= element.dataset.index;
  if(direction=="right"){index++;}else{index--}
  if(index>images.length-1){index=0;}
  if(index<0){index=images.length-1;}
  element.dataset.index=index;
  element.style.backgroundImage  ="url('"+ images[index].img +"')";
};

