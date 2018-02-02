let iconsOnMapSrc = [];

function getIconsOnMapSrc() {
   for (let i=0; i<taskOnMapClass.length; i++) {
       iconsOnMapSrc.push(document.getElementsByClassName('task-on-map')[i].getAttribute('src'))
   }
}

function isThereAnyGameTaskIconOnMap() {
    let gameTaskGetAttrSrc = document.getElementById('game-task').getAttribute('src');
    iconsOnMapSrc.length = 0;
    getIconsOnMapSrc();
    return iconsOnMapSrc.includes(gameTaskGetAttrSrc)
}

