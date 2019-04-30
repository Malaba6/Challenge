let countSmileys = (smilyes) => {
    let count = 0;
    for (let s of smilyes) {
        if (s.length === 2) {
            if (s[0] !== ':' && s[0] !== ';') continue;
            if (s[1] !== ')' && s[1] !== 'D') continue;
            count++;
        } else if (s.length === 3) {
            if (s[0] !== ':' && s[0] !== ';') continue;
            if (s[1] !== '-' && s[1] !== '~') continue;
            if (s[2] !== ')' && s[2] !== 'D') continue;
            count++;
        }
    }
    return count;
}

console.log(countSmileys([]));