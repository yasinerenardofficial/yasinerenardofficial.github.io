gamestart = false ;
let score = 0 ;
score_to_draw ="score" + score ;
var titre = "Titre A";
var character =
    document.getElementById("character");
var block =
    document.getElementById("block");
document.getElementById("dynamicTitle").innerText = titre;
//document.getElementById("score").innerText = "scores" + score;
function jump(){
    //gamestart = true;
    if(character.classList!="animate"){
    character.classList.add("animate");
    if(block.classList!="animate"){
    block.classList.add('animate');}
    score ++ ;
    document.getElementById("score").innerText = "score = " + score;
}
setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkdead = setInterval(function(){
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && charactertop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Wesh t'est mort!");
        location.reload()
    }
},10)
block.addEventListener('animationend', () => {
    score += 1; // Increment the score by 1
  });
// if (gamestart) {
//     block.classList.add('animate');
//   } //else {
//     //blockElement.classList.remove('animate');}