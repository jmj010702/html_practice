const onClickUpdate = () => {
    const elements = document.getElementsByClassName("onclick-contents");
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "변경 후";
    }
}
const onClickRollback = () => {
    const elements = document.getElementsByClassName("onclick-contents");
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "변경 전";
    }
}

const toggleUpdate = () => {
    const updateElem = document.getElementById("externalFunc-update");
    const rollbackElem = document.getElementById("externalFunc-rollback");
    if (updateElem.style.display === "none") {
        updateElem.style.display = "block";
        rollbackElem.style.display = "none";
    } else {
        updateElem.style.display = "none";
        rollbackElem.style.display = "block";
    }
}