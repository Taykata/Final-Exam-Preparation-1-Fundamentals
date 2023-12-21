function secretChat(input) {

    let message = input[0];

    let index = 1;
    let fullCommand = input[index];
    index++;

    while (true) {
        let [command, str1, str2] = fullCommand.split(':|:');

        if (command === 'ChangeAll') {
            while (message.includes(str1)) {
                message = message.replace(str1, str2);
            }
            console.log(message);
        } else if (command === 'Reverse') {
            if (message.includes(str1)) {

                let string1 = '';
                let misticWord = '';
                let string2 = '';

                let num = message.indexOf(str1);

                for (let i = 0; i < message.length; i++) {
                    if (i < num) {
                        string1 += message[i];
                    } else if (i === num) {
                        for (let j = num; j < num + str1.length; j++) {
                            misticWord += message[j];
                            i++;
                        }
                    } else if (i > num) {
                        string2 += message[i];
                    }
                }

                let reversed = '';

                for (let i = misticWord.length - 1; i >= 0; i--) {
                    reversed += misticWord[i];
                }

                message = string1 + string2 + reversed;

                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'InsertSpace') {
            let space = ' ';
            let string1 = '';
            let string2 = '';

            for (let i = 0; i < message.length; i++) {
                if (i < Number(str1)) {
                    string1 += message[i];
                } else if (i >= Number(str1)) {
                    string2 += message[i];
                }
            }
            message = string1 + space + string2;
            console.log(message);
        } else if (command === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }

        fullCommand = input[index];
        index++;
    }

}

// secretChat(['heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal']);

secretChat(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);