import {StringCalculator} from "../main/StringCalculator";

describe("string calculator test", () => {
    it("should return 0 when input string is empty", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("")).toBe(0);
    });

    it("should return 0 when input string '0'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("0")).toBe(0);
    });

    it("should return 4 when input '4'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("4")).toBe(4);
    });

    it("should return 3 when input '1,2'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2")).toBe(3);
    });

    it("should return 45 when input '1,2,3,4,5,6,7,8,9'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2,3,4,5,6,7,8,9")).toBe(45);
    });

    it("should return 6 when input '1\n2,3'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1\n2,3")).toBe(6);
    });

    it("should return 3 when input '1,\n2'", () => {
        const stringCalculator: StringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,\n2")).toBe(3);
    });

});
