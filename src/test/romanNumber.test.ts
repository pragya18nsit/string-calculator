import {RomanNumber} from "../main/RomanNumber";

describe("Roman Number test", () => {
    it.each `input   | expectedRomanNumber
                ${1} | ${"I"}
                ${2} | ${"II"}
                ${3} | ${"III"}
                ${4} | ${"IV"}
                ${5} | ${"V"}`
        ("should return $expectedRomanNumber when input is $input", ({input, expectedRomanNumber} ) => {
        const romanNumber: RomanNumber = new RomanNumber();
        expect(romanNumber.romanConverter(input)).toBe(expectedRomanNumber);
    });


});
