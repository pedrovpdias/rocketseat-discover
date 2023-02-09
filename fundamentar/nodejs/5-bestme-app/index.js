//process.stdout.write(); == Saída padrão do Processo

const questions = [
    'Qual o seu nome?',
    'O que aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]

const ask = ( index = 0 ) =>  { 
    process.stdout.write('\n\n' + questions[index] + ' > '); //Imprime questions
}

ask();

const answers = [];

//Verifica por eventos
process.stdin.on('data',  data => {
    //process.stdout.write ( data.toString().trim() + '\n' );
    answers.push(data.toString().trim())

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    console.log(`
        
        ==================================================
        
        Bacana, ${answers[0]}!

        O que você aprendeu hoje foi:
        > ${answers[1]}

        O que te aborreceu e você poderia melhorar foi:
        > ${answers[2]}

        O que te deixou feliz hoje foi:
        > ${answers[3]}
        
        Você ajudou ${answers[4]} pessoas hoje. Muito bem!

        Volte amanhã para novas reflexões

        ==================================================
    `);
})