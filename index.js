debugger;
let redBottels = +prompt('Введите количество бутылок');
//console.log(redBottels);
debugger;
let arrRed = [];
debugger;
for (let i = 0; i < redBottels; i++){
    let vRed = +prompt('Введите объем ' + (i + 1) + ' бутылки');
    let objectRed = {};
    objectRed.v = vRed;
    objectRed.l = vRed;
    arrRed.push(objectRed);
};
//console.log(arrRed);
debugger;
let blueBottels = +prompt('Введите количество синих бутылок');
//console.log(blueBottels);
debugger;
let arrBlue = [];


debugger;
for (let j = 0; j < blueBottels; j++){
    let vBlue = +prompt('Введите объем ' + (j + 1) + '  бутылки');
    let objectBlue = {};
    objectBlue.v = vBlue;
    objectBlue.l = 0;
    arrBlue.push(objectBlue);
};
//console.log(arrBlue);


/*for (;;) {
    let i = 0;
    let j = 0;
    for (; arrRed[i].l > ( arrBlue[j].v - arrBlue[j].l );) {
        arrRed[i].l = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
        arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
        j = j + 1;
        if (j > arrBlue.length) {
            alert('Закончились синие бутылки');
        }
    }
    arrBlue[j].l = arrBlue[j].l + arrRed[i].l;
    arrRed[i].l = 0;
    i = i + 1;
    for (;i > arrRed.length;) {
        alert('Закончились красные бутылки')
    }
    for (;arrBlue[j].l === arrBlue[j].v;) {
        j = j + 1;
    }
    if (j > arrBlue.length) {
        alert('Закончились синие бутылки');
    }
}*/







/*let i = 0;
let j = 0;

outer: for(;;) {
    while (arrRed[i].l > ( arrBlue[j].v - arrBlue[j].l )) {
        arrRed[i].l = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
        arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
        j = j + 1;
        if (j > arrBlue.length) {
            alert('Закончились синие бутылки');
        } break outer
    }
    arrBlue[j].l = arrBlue[j].l + arrRed[i].l;
    arrRed[i].l = 0;
    i = i + 1;
    while (i > arrRed.length) {
        alert('Закончились красные бутылки')
    }
    if (arrBlue[j].l !== arrBlue[j].v) break outer
    j = j + 1;
    if (j > arrBlue.length) {
        alert('Закончились синие бутылки');
    } break outer
}



console.log(arrBlue);
console.log(arrRed);*/










/*let i = 0;
let j = 0;

outer: switch (arrRed[i].l > ( arrBlue[j].v - arrBlue[j].l )) {
    case true:
        arrRed[i].l = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
        arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
        j = j + 1;
        switch (j > arrBlue.length) {
            case true:
                alert('Закончились синие бутылки');
                break;
        }
    case false:
        arrBlue[j].l = arrBlue[j].l + arrRed[i].l;
        arrRed[i].l = 0;
        i = i +1;
        switch (i > arrRed.length) {
            case true:
                alert('Закончились красные бутылки')
                break;
            case false:
                switch (arrBlue[j].l === arrBlue[j].v) {
                    case true:
                        j =j + 1;
                        switch (j > arrBlue.length) {
                            case true:
                                alert('Закончились синие бутылки');
                                break outer;
                            case false:
                                break outer;
                        }
                    case false:
                        break outer;
                }
        }
}
console.log(arrBlue);
console.log(arrRed);*/















/*let i = 0;
let j = 0;

outer: if (arrRed[i].l > ( arrBlue[j].v - arrBlue[j].l )) {
    arrRed[i].l = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
    arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
    j = j + 1;
    if (j > arrBlue.length){
        alert('Закончились синие бутылки')
    } else {
        break outer
    }
} else {
    arrBlue[j].l = arrBlue[j].l + arrRed[i].l;
    arrRed[i].l = 0;
    i = i +1;
    if (i > arrRed.length) {
        alert('Закончились красные бутылки')
    } else if (arrBlue[j].l !== arrBlue[j].v) {
        break outer
    } else {
        j = j + 1;
        if (j > arrBlue.length) {
            alert('Закончились синие бутылки')
        } else {
            break outer
        }
    }
}
console.log(arrBlue);
console.log(arrRed);*/







let i = 0, j = 0;
console.log('i = ' + i);
console.log('j = ' + j);


debugger;
for (;;)
{
    if (arrRed[i].l > ( arrBlue[j].v - arrBlue[j].l ))
    {
        arrRed[i].l = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
        arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
        j = j + 1;
        console.log('j = ' + j);
        if (j > arrBlue.length - 1){alert('Мало синих бутылок'); break} continue;
    }
    else
    {
        arrBlue[j].l = arrRed[i].l + arrBlue[j].l;
        arrRed[i].l = 0;
        i = i + 1;
        console.log('i = ' + i);
        if (i > arrRed.length - 1)
        {
            alert('Мало красных бутылок'); break
        }
        else
        {
            if (arrBlue[j].l === arrBlue[j].v)
            {
                j = j + 1;
                console.log('j = ' + j);
                if ( j > arrBlue.length - 1)
                {
                    alert('Мало синих бутылок'); break
                } continue;
            } continue;
        }
    }
};
console.log(arrRed);
console.log(arrBlue);



/*function maxLength(){
    if(arrRed.length > arrBlue.length){
        return arrRed.length;
    } else{
        return arrBlue.length;
    }
};*/
/*let i = 0, j = 0;
if (arrRed[i].l > ( arrBlue[j].v - arrBlue[j] )) {
    arrRed[i] = arrRed[i].l - (arrBlue[j].v - arrBlue[j].l);
    arrBlue[j].l = arrBlue[j].l + (arrBlue[j].v - arrBlue[j].l);
    j + 1 > arrBlue.length ? alert('Зкончились синие бутылки') : j = j + 1;
} else {
    arrBlue[j].l = arrRed[i].l + arrBlue[j].l;
    arrRed[i].l = 0;
    i = i + 1;
    i > arrRed.length ? alert('Закончились красные бутылки') :
        arrBlue[j].l === arrBlue[j].v ? j + 1 > arrBlue.length ? alert('Зкончились синие бутылки') : j = j + 1 : i = i +1, j = j +1 ;
}

console.log(arrRed);
console.log(arrBlue);*/
