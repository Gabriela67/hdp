var disks, towers, draggedone;

function init(){
  disks = document.getElementsByClassName("disk");
  towers = document.getElementsByClassName("torres");
  for (var i = 0;i<disks.length;i++){
    disks[i].draggable = i==0;
    disks[i].addEventListener("dragstart",dragstart);
  }
  for (var i = 0;i<towers.length;i++){
    towers[i].addEventListener("dragover", dragover);
    towers[i].addEventListener("drop", drop);
    towers[i].addEventListener("dragenter", dragenter);
  }
}

function dragstart(ev) {
  // write Diks-ID into dataTransfer Object
  ev.dataTransfer.setData('text', ev.target.id);
  // since dataTransfer is protected in dragenter we have to have a variable
  draggedone = ev.target.id;
}

function dragenter (ev) {
  // get tower that has been entered by drag and get disk-ID
  var tower = ev.currentTarget; 
  var disk = draggedone;
  // get disks that are already on tower
  var disksOnTower = tower.getElementsByClassName("disk"); 
  if (disksOnTower.length==0 || disksOnTower[0].id>disk){
    // here if no disks yet on tower or the top disk is bigger than the dragged disk  
    tower.diskCanBeDroppedHere = true; // we have to remember it for dragover
    ev.preventDefault(); // yes please!
    return;
  }
  tower.diskCanBeDroppedHere = false; // sorry no drop allowed here
}

function dragover(ev){
  if (ev.currentTarget.diskCanBeDroppedHere)
      ev.preventDefault();// if we may drop here ...
}
  
function drop(ev) {
  // find disk and tower involved
  var tower = ev.currentTarget;
  var disk = document.getElementById(ev.dataTransfer.getData('text'));
  ev.dataTransfer.dropEffect = 'move';
  // put disk on top of tower
  tower.insertBefore(disk,tower.firstChild);
  // re-adjust draggability
  for (var i=0; i<towers.length;i++){ // for all towers
    var e = towers[i].getElementsByClassName("disk"); // get disks
    if (e.length) e[0].draggable = true; // iop disk is draggable
    for (var j=1;j<e.length;j++){
      e[j].draggable = false; // all others are not
    }
  }
  ev.preventDefault(); // ... whatever the default is!!!
}
init();