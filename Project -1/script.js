const stranger = document.querySelector("h2");
const addFriendBtn = document.querySelector(".add-friend");


let flag = 0;
document.querySelector(".add-friend").addEventListener("click",()=>{
    if(flag == 0){
        stranger.textContent = "Friend";
        stranger.style.color = "green";
        addFriendBtn.innerHTML = "Remove Friend";
        addFriendBtn.style.backgroundColor = "red";
        flag = 1;
    }
    else{
        stranger.textContent = "Stranger";
        stranger.style.color = "red";
        addFriendBtn.innerHTML = "Add Friend";
        addFriendBtn.style.backgroundColor = "blue";
        flag = 0;
    }
})