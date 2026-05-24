function calculate() {

    try {

        let exp = display.value;

        // Handle calculator percentage logic
        exp = exp.replace(
            /(\d+)([+\-*/])(\d+)%/,
            function(match, num1, operator, num2) {

                let percentage = num1 * (num2 / 100);

                return num1 + operator + percentage;
            }
        );

        display.value = eval(exp);

    } catch {

        display.value = "Error";

    }

}