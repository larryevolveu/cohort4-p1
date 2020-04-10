const mortFunctions = {
    play() {
        console.log("in mortFunctions");
    },

    //
    // The Stub which is the signature
    //
    calcLoan(principal, yearInterest, years) {

        const interest = yearInterest / 100 / 12;
        const payments = years * 12;

        // Now compute the monthly payment figure, using esoteric math.
        const x = Math.pow(1 + interest, payments);
        const monthly = (principal * x * interest) / (x - 1);
        const total = monthly * payments;
        const totalInterest = total - principal;

        //
        // If we have valid number return them
        //
        if(monthly & total) {
            return { 
                monthly: mortFunctions.round(monthly), 
                total: mortFunctions.round(total), 
                interest: mortFunctions.round(totalInterest)
            }
        }

        // 
        // The numbers must not be valid
        //
        return { 
            monthly: '',
            total: '',
            interest: '',
        }
    },

    round(num) {
        return Math.round(num * 100) / 100;
    }
}

export default mortFunctions;
