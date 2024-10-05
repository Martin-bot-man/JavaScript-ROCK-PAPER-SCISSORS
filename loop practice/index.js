function countSelected(selectObject) {
    let numberSelected = 0;
    // Corrected the condition in the loop
    for (let i = 0; i < selectObject.options.length; i++) {
        // Corrected the case of 'options'
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes; // Corrected reference to the form
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
