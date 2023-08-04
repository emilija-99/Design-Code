let canConstuct = function (ransomeNote, magazine){
    for(let i = 0; i < ransomeNote.length; i++){
        let character = ransomeNote.charAt(i);
        let machingIndex = magazine.indexOf(character);

        if(machingIndex == -1){
            return false;
        }
        magazine = magazine.substring(0, machingIndex) + magazine.substring(machingIndex+1)''
    }
    return true;
}