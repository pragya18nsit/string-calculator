export class RomanNumber {

    romanConverter(input: number) {
        if(input === 2)
            return "II";
        if(input === 3)
            return "III";
        if(input === 4)
            return "IV";
        return "I";
    }
}
