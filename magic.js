/*
 * Stappenplan gemaakt door perplexity AI
 * code geschreven door Flor Stragier
 */

const score = ['0', '15', '30', '40', 'AD']
/*
0: 0
1:15
2:30
3:40
4:AD
5:win
*/
let currentSet = 1

let set1_1 = 0
let w1_1 = false
let set1_1El = document.getElementById("top-1")
let set2_1 = 0
let w2_1 = false
let set2_1El = document.getElementById("top-2")
let set3_1 = 0
let w3_1 = false
let set3_1El = document.getElementById("top-3")
let games1 = 0
let games1El = document.getElementById("games-1")

let set1_2 = 0
let w1_2 = false
let set1_2El = document.getElementById("bot-1")
let set2_2 = 0
let w2_2 = false
let set2_2El = document.getElementById("bot-2")
let set3_2 = 0
let w3_2 = false
let set3_2El = document.getElementById("bot-3")
let games2 = 0
let games2El = document.getElementById("games-2")

let tiebreak1El = document.getElementById("tb-1")
let tiebreak2El = document.getElementById("tb-2")
let TBP1 = 0
let TBP2 = 0
let TB = false

tiebreak1El.style.display = "none"
tiebreak2El.style.display = "none"

function increasePlayer1() {
    console.log(currentSet)
    if (!TB) {
        if(games1 == 3 && games2 == 3) {
            games1 += 1
            games1El.innerText = score[games1]
        }
        else if(games1 == 4 && games2 == 3 || (games1 == 3 && games2 < 3)) {
            updateSetsP1()
        }
        else if(games1 == 3 && games2 == 4) {
            games2 -= 1
        }
        else {
            games1 += 1
        }
        games1El.innerText = score[games1]
        games2El.innerText = score[games2]
    }
    else {
        TBP1 += 1
        tiebreak1El.innerText = TBP1
        if (TBP1 >= 7 && TBP1-TBP2 >= 2) {
            updateSetsP1()
            TB = false
            endTiebreak("1")
            checkForWinP1()
        }
    }
}

function increasePlayer2() {
    console.log(currentSet)
    if (!TB) {
        if(games1 == 3 && games2 == 3) {
            games2 += 1
        }
        else if(games1 == 3 && games2 == 4 || (games1 < 3 && games2 == 3)) {
            updateSetsP2()
        }
        else if(games1 == 4 && games2 == 3) {
            games1 -= 1
        }
        else {
            games2 += 1
        }
        games1El.innerText = score[games1]
        games2El.innerText = score[games2]
    }
    else {
        TBP2 += 1
        tiebreak2El.innerText = TBP2
        if (TBP2 >= 7 && TBP2-TBP1 >= 2) {
            updateSetsP2()
            TB = false
            endTiebreak("2")
            checkForWinP2()
        }
    }
}

function updateSetsP1() {
    if (currentSet == 1) {
        set1_1 += 1
        set1_1El.innerText = set1_1
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set1_1, set1_2)) {
            startTiebreak()
        }
        if(checkForSet(set1_1, set1_2)) {
            w1_1 = true
            console.log("set won")
        }
    }
    else if (currentSet == 2) {
        set2_1 += 1
        set2_1El.innerText = set2_1
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set2_1, set2_2)) {
            startTiebreak()
        }
        if(checkForSet(set2_1, set2_2)) {
            w2_1 = true
            console.log("set won")
        }
        checkForWinP1()
    }
    else if (currentSet == 3) {
        set3_1 += 1
        set3_1El.innerText = set3_1
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set3_1, set3_2)) {
            startTiebreak()
        }
        if(checkForSet(set3_1, set3_2)) {
            w3_1 = true
            console.log("set won")
        }
        checkForWinP1()
    }
}

function updateSetsP2() {
    if (currentSet == 1) {
        set1_2 += 1
        set1_2El.innerText = set1_2
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set1_1, set1_2)) {
            startTiebreak()
        }
        if(checkForSet(set1_2, set1_1)) {
            w1_2 = true
        }
    }
    else if (currentSet == 2) {
        set2_2 += 1
        set2_2El.innerText = set2_2
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set2_2, set2_1)) {
            startTiebreak()
        }
        if(checkForSet(set2_2, set2_1)) {
            w2_2 = true
        }
        checkForWinP2()
    }
    else if (currentSet == 3) {
        set3_2 += 1
        set3_2El.innerText = set3_2
        games1 = 0
        games2 = 0
        if(checkForTieBreak(set3_2, set3_1)) {
            startTiebreak()
        }
        if(checkForSet(set3_2, set3_1)) {
            w3_2 = true
        }
        checkForWinP2()
    }
}

function checkForTieBreak(gamesP1, gamesP2) {
    if (gamesP1 == 6 && gamesP2 == 6) {
        TB = true
        return true
    }
}

function startTiebreak() {
    tiebreak1El.style.display = "block"
    tiebreak2El.style.display = "block"
}

function endTiebreak(player) {
    tiebreak1El.style.display = "none"
    tiebreak2El.style.display = "none"
    TB = false
    TBP1 = 0
    TBP2 = 0
    if (player == "1") {
        if (currentSet == 1) {
            w1_1 = true
            console.log("set won")
        }
        else if (currentSet == 2) {
            w2_1 = true
            console.log("set won")
        }
        else if (currentSet == 3) {
            w3_1 = true
            console.log("set won")
        }
    }
    else if (player == "2") {
        if (currentSet == 1) {
            w1_2 = true
            console.log("set won")
        }
        else if (currentSet == 2) {
            w2_2 = true
            console.log("set won")
        }
        else if (currentSet == 3) {
            w3_2 = true
            console.log("set won")
        }
    }
    currentSet += 1
}

function checkForSet(setP1, setP2) {
    if(setP1 >= 6 && setP1-setP2 >= 2) {
        currentSet += 1
        return true
    }
}

function checkForWinP1() {
    if ((w1_1 && w2_1) || (w2_1 && w3_1) || (w1_1 && w3_1)) {
        console.log("P1 gewonnen")
        document.getElementById("win").innerText = "speler één heeft gewonnen"
    }
    else {return false}
}
function checkForWinP2() {
    if ((w1_2 && w2_2) || (w2_2 && w3_2) || (w1_2 && w3_2)) {
        document.getElementById("win").innerText = "speler twee heeft gewonnen"
    }
    else {return false}
}

function reset() {
    currentSet = 1

    set1_1 = 0
    w1_1 = false
    set2_1 = 0
    w2_1 = false
    set3_1 = 0
    w3_1 = false
    games1 = 0

    set1_2 = 0
    w1_2 = false
    set2_2 = 0
    w2_2 = false
    set3_2 = 0
    w3_2 = false
    games2 = 0

    games1El.innerText = games1
    games2El.innerText = games2

    set1_1El.innerText = set1_1
    set2_1El.innerText = set2_1
    set3_1El.innerText = set3_1

    set1_2El.innerText = set1_2
    set2_2El.innerText = set2_2
    set3_2El.innerText = set3_2

    TBP1 = 0
    TBP2 = 0

    tiebreak1El.innerText = 0
    tiebreak2El.innerText = 0

    document.getElementById("win").innerText = ""
}