let nome = "João"
let nivel = 0

while(nivel < 10001){
    nivel += 1000 
    if(nivel <= 1000){
        console.log(`O Héroi de nome ${nome} está no nível de Ferro porque tem ${nivel} de XP.`)
    } else if(nivel >= 1001 && nivel <= 2000){
        console.log(`O Héroi de nome ${nome} está no nível de Bronze porque tem ${nivel} de XP.`)
    } else if((nivel >= 2001 && nivel <= 5000) || (nivel <= 6000)){
        console.log(`O Héroi de nome ${nome} está no nível de Prata porque tem ${nivel} de XP.`)
    } else if(nivel >= 6001 && nivel <= 7000){
        console.log(`O Héroi de nome ${nome} está no nível de Ouro porque tem ${nivel} de XP.`)
    } else if(nivel >= 7001 && nivel <= 8000){
        console.log(`O Héroi de nome ${nome} está no nível de Platina porque tem ${nivel} de XP.`)
    } else if(nivel >= 8001 && nivel <= 9000){
        console.log(`O Héroi de nome ${nome} está no nível de Ascendente porque tem ${nivel} de XP.`)
    } else if(nivel >= 9001 && nivel <= 10000){
        console.log(`O Héroi de nome ${nome} está no nível de Imortal porque tem ${nivel} de XP.`)
    } else if(nivel >= 10001){
        console.log(`O Héroi de nome ${nome} está no nível de Radiante porque tem ${nivel} de XP.`)
    }
}