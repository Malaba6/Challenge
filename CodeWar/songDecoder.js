let songDecoder = (song) => {
    // ...
    if (typeof song != 'string') {
        throw new TypeError("song should be a string of numbers");
    }
    for (let char of song) {
        if (char !== char.toUpperCase() && char === char.toLowerCase()) {
            return "Upper case only allowed";
        }
    }

    return song.split("WUB").filter(el => el === el.toUpperCase() && el !== el.toLowerCase() && el !== '').join(' ').trim();
}

console.log(songDecoder("WUBAWUBBWUBCWUB"));