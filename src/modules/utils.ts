export const website = "https://xmrvsbeast.com/"

export const abbreviateNumber = (number: number): string => {
    const SI_SYMBOL = [" h/s", " Kh/s", " Mh/s", " Gh/s", " Th/s", " Ph/s", " Eh/s"];

    // what tier? (determines SI symbol)
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    if(tier === 0) return number.toString() + " h/s";

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(2) + suffix;
}
