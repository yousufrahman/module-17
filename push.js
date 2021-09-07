var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('yousuf')
lastBench.pop();
lastBench.push('nishst');
lastBench.pop();
lastBench.push(13);

var lastItem = lastBench.pop();
lastBench.unshift('shak-hasina', 'shak-rahana');
lastBench.shift('shak-hasina')
console.log(lastItem);
console.log(lastBench);