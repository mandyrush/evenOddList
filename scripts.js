let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(event) {
    usersWord = event.target.value

    console.log(event.keyCode)

    // If enter key is pressed, stop the form from submitting and run handleSubmit
    if(event.keyCode == 13) {
        console.log('enter key pressed')
        handleSubmit()
        return false
    }
    else {
        return true
    }

    console.log(usersWord)
}

function handleSubmit(event) {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    if(usersWord.length % 2 === 0) {
        /*put word in even lists*/
        evenList.appendChild(newListItem)
    } else {
        /*put word in odd list*/
        oddList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
}

