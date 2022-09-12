console.log("Hello World")

// console.log("HH   HH        lll lll                                  lll      dd !!!")
// console.log("HH   HH   eee  lll lll  oooo   ww      ww  oooo  rr rr  lll      dd !!!")
// console.log("HHHHHHH ee   e lll lll oo  oo  ww      ww oo  oo rrr  r lll  dddddd !!!")
// console.log("HH   HH eeeee  lll lll oo  oo   ww ww ww  oo  oo rr     lll dd   dd    ")
// console.log("HH   HH  eeeee lll lll  oooo     ww  ww    oooo  rr     lll  dddddd !!!")         



let megaHello = [["HH   HH        lll lll                                  lll      dd !!!"],
["HH   HH   eee  lll lll  oooo   ww      ww  oooo  rr rr  lll      dd !!!"],
["HHHHHHH ee   e lll lll oo  oo  ww      ww oo  oo rrr  r lll  dddddd !!!"],
["HH   HH eeeee  lll lll oo  oo   ww ww ww  oo  oo rr     lll dd   dd    "],
["HH   HH  eeeee lll lll  oooo     ww  ww    oooo  rr     lll  dddddd !!!"]]

let megaText = [[" ____    _             _                   _   "],
["| __ )  (_)   __ _    | |_    ___  __  __ | |_ "],
["|  _/   | |  / _` |   | __|  / _ | | |/ / | __|"],
["| |_)   | | | (_| |   | |_  |  __/  >  <  | |_ "],
["|____|  |_| |__,  |   |__|  |___| /_/|_|  |__|"],
["              |___/                             ]"]]

function megaWordPrinter(word){
    for (const arr of word){
        console.log(arr[0])
    }
}

megaWordPrinter(megaHello)
megaWordPrinter(megaText)