const textarea = document.getElementById("textarea")
const fileNameInput = document.getElementById("file-name")
const selectMenu = document.getElementById("select-menu")
const saveBtn =document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {

    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob)
    const link  = document.createElement("a");
    link.download= fileNameInput.value;
    link.href = fileUrl;
    link.click();
})
