// okna dialogowe

// schemat for:
// for (od; warunek; krok)

// alert("dupa") // jedne z okien dialogowych wypisuje zawarość i przycisk ok

// let czy = confirm("Czy potwierdzasz?") // drugie okno dialogowe które wypisze zawartośc z przyciskoem OK i Anuluj
// document.write(czy)

// let imie = prompt("jak masz na imię?") // trzecie okno dialogowe do którego użytkownik może wpisać tekst oraz przyciski OK i Anuluj
// if (imie != null) {  // w warunku wystarczy wpisać imie
//     document.write(imie)
// } else {
//     document.write("nie podałeś imienia")
// }

// let liczba1 = parseInt(prompt("Podaj liczbę:"));
// let liczba2 = parseInt(prompt("Podaj liczbę większą od poprzedniej:"));
// liczba2 = parseInt(liczba2);

// for (let i = liczba1; i <= liczba2; i++) {
//     document.write(i, "<br>");
// }


// ===============================================


const reqest2Numbers = () => {    // prosi użytkownika o podanie 2 liczb (wypisuje je w tabeli)
    let liczba1 = parseInt(prompt("Podaj liczbę kolumn:"))
    let liczba2 = parseInt(prompt("Podaj liczbę wierszy:")) 
    return [liczba1,liczba2]
}

const createArray = (column,row) => {  // tworzy tablice na podstawie column(kolumn) i row(wierszy) (wypisuje ją do tabeli)
    const tempArray = [] 
    for (let iteration1 = 1; iteration1 <= row; iteration1++) {
        tempArray.push([])
        for (let iteration2 = 1; iteration2 <= column; iteration2++) {
            tempArray[iteration1-1].push(iteration1*iteration2)         
        }
    }
    return tempArray
}

const printArray = (column,row,tempArray) => { // buduje tablice na podstawie column i row, wypisując zawartości tempArray 
    document.write("<table>")
    for (let iteration1 = 1; iteration1 <= row; iteration1++) {
        document.write("<tr>")
        for (let iteration2 = 1; iteration2 <= column; iteration2++) {
            document.write(`<td id="row${iteration1}Column${iteration2}"> ${tempArray[iteration1-1][iteration2-1]}  </td>`)
        }
        document.write("</tr>")
    }
    document.write("</table>")
}


// inicjalizacja kodu zaczyna się TUTAJ: \/ \/ \/
numArray = reqest2Numbers()
mainArray = createArray(numArray[0],numArray[1])
printArray(numArray[0],numArray[1],mainArray)


let counterNumber = 0
const counter = (symbol) => { // funkcja zieniająca 
    if (symbol === "-") {
        if (counterNumber - 1 >= 0) {
            counterNumber--
        }
    } else if (symbol === "+") {
        if (counterNumber + 1 <= 100) {
            counterNumber++
        }
    }
    document.getElementById("counter").innerHTML = counterNumber
}



const updateArray = (column,row,tempArray) => { // aktualizuje tablice na podstawie column i row, wypisując zawartości tempArray 
    for (let iteration1 = 1; iteration1 <= row; iteration1++) {
        for (let iteration2 = 1; iteration2 <= column; iteration2++) {
            document.getElementById(`row${iteration1}Column${iteration2}`).innerHTML = tempArray[iteration1-1][iteration2-1]
        }
    }
}


const changeArray = (column,row,symbol) => { // zmienia główną tablice w zależności od symbor i counterNumber
    const tempArray = []
    if (symbol === "+") {
        for (let iteration1 = 1; iteration1 <= row; iteration1++) {
            tempArray.push([])
            for (let iteration2 = 1; iteration2 <= column; iteration2++) {
                tempArray[iteration1-1].push(mainArray[iteration1-1][iteration2-1]+counterNumber)         
            }
        }
    }
    if (symbol === "-") {
        for (let iteration1 = 1; iteration1 <= row; iteration1++) {
            tempArray.push([])
            for (let iteration2 = 1; iteration2 <= column; iteration2++) {
                tempArray[iteration1-1].push(mainArray[iteration1-1][iteration2-1]-counterNumber)         
            }
        }
    }
    if (symbol === "*") {
        for (let iteration1 = 1; iteration1 <= row; iteration1++) {
            tempArray.push([])
            for (let iteration2 = 1; iteration2 <= column; iteration2++) {
                tempArray[iteration1-1].push(mainArray[iteration1-1][iteration2-1]*counterNumber)         
            }
        }
    }
    if (symbol === "/") {
        for (let iteration1 = 1; iteration1 <= row; iteration1++) {
            tempArray.push([])
            for (let iteration2 = 1; iteration2 <= column; iteration2++) {
                tempArray[iteration1-1].push(mainArray[iteration1-1][iteration2-1]/counterNumber)         
            }
        }
    }
    mainArray = tempArray
    updateArray(numArray[0],numArray[1],mainArray)
}

