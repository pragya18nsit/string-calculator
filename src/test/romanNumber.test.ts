import {RomanNumber} from "../main/RomanNumber";

describe("Roman Number test", () => {
    it("should return I when input is 1", () => {
        const romanNumber: RomanNumber = new RomanNumber();
        expect(romanNumber.romanConverter(1)).toBe("I");
    });

});
