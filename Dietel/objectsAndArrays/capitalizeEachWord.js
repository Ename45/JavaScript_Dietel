function capitalize() {
    jadenCased = "";

    for (let i = 0; i < notJadenCased.length; i++) {
        if (notJadenCased[i] === " ") {
        let newer = notJadenCased[i + 1];
        jadenCased += ` ${newer.toUpperCase()}`;
        i++;
        continue;
        }
        jadenCased += notJadenCased[i];
    }

    return jadenCased;
}

let notJadenCased = "How can mirrors be real if you aren't seeing your eyes";
console.log(capitalize(notJadenCased));
