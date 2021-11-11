export class StringCalculator {
    Add(input: string) {
        if (input === "") return 0;

        const numbers = input.split(/,|\n/);

        return numbers
            .map((n) => {
                const parsed = parseInt(n);
                return Number.isNaN(parsed) ? 0 : parsed
            })
            .reduce((sum, current) => sum + current, 0);
    }
}
