function mirrorWords([input]) {

    let pattern = /([#@])(?<first>[a-zA-Z]{3,})\1\1(?<second>[a-zA-Z]{3,})\1/gi;

    let match = pattern.exec(input);

    let counter = 0;
    let mirrorCounter = 0;
    let buff = '';

    while (match != null) {
        counter++;
        let {first, second} = match.groups;

        let reversedWord = second.split('').reverse().join('');

        if (reversedWord === first) {
            mirrorCounter++;
            buff += first + ' <=> ' + second + ', ';
        }

        match = pattern.exec(input);
    }

    let buff2 = buff.split('');

    buff = '';

    for (let i = 0; i < buff2.length - 2; i++) {
        buff += buff2[i];
    }

    if (counter === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if (mirrorCounter === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are: ');
        console.log(buff);
    }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
