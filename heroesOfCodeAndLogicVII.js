function heroesOfCodeAndLogicVII(input) {

    let num = input.shift();

    let party = {};

    for (let i = 0; i < num; i++) {
        let heroData = input[0].split(' ');
        let heroName = heroData[0];
        let hp = Number(heroData[1]);
        let mp = Number(heroData[2]);

        party[heroName] = {
            hp: hp,
            mp: mp
        }
        input.shift();
    }

    let fullCommand = input.shift();

    while (fullCommand != 'End') {
        let tokens = fullCommand.split(' - ');
        let command = tokens[0];

        if (command === 'Heal') {
            let heroName = tokens[1];
            if (heroName in party) {
                let amount = Number(tokens[2]);

                let firstHealth = party[heroName].hp;
                party[heroName].hp += amount;

                if (party[heroName].hp > 100) {
                    party[heroName].hp = 100;
                }
                amount = party[heroName].hp - firstHealth;
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        } else if (command === 'Recharge') {
            let heroName = tokens[1];
            if (heroName in party) {
                let amount = Number(tokens[2]);

                let firstMana = party[heroName].mp;
                party[heroName].mp += amount;

                if (party[heroName].mp > 200) {
                    party[heroName].mp = 200;
                }
                amount = party[heroName].mp - firstMana;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        } else if (command === 'TakeDamage') {
            let heroName = tokens[1];
            if (heroName in party) {
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                party[heroName].hp -= damage;

                if (party[heroName].hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${party[heroName].hp} HP left!`);
                } else {
                    delete party[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
            }
        } else if (command === 'CastSpell') {
            let heroName = tokens[1];
            if (heroName in party) {
                let mpNeeded = Number(tokens[2]);
                let spellName = tokens[3];

                party[heroName].mp -= mpNeeded;

                if (party[heroName].mp >= mpNeeded) {
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${party[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
            }
        }

        fullCommand = input.shift();
    }

    let entries = Object.entries(party);

    for (let [hero, obj] of entries) {
        console.log(hero);
        console.log(`  HP: ${obj.hp}`);
        console.log(`  MP: ${obj.mp}`);
    }

}

heroesOfCodeAndLogicVII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);