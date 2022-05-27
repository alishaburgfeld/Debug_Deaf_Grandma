function deafGrandma() {
    let goodbyes = 0
    let userInput=window.prompt("HEY KID!")
    while (goodbyes<3) {
        if ( userInput == "" ) {
            window.prompt("WHAT!?")
        }
        else if (userInput.toUpperCase() !== userInput ) {
            window.prompt("SPEAK UP, KID!")
        }
        else if (userInput.toUpperCase() === userInput && userInput !=="GOODBYE!") {
            window.prompt('NO, NOT SINCE 1946!')
        }
        else if (userInput === "GOODBYE!" ) {

            if ( goodbyes === 0 ) {
                window.prompt("LEAVING SO SOON?'")
            }
            else if ( goodbyes === 1 ) {
                window.prompt("LATER, SKATER!")
            }
            goodbyes += 1
        }
    }
}
deafGrandma()