
$(document).ready(function () {
    $("#getSolution").click(function () {
        var a = document.getElementById("coefficientA").value;
        var b = document.getElementById("coefficientB").value;
        var c = document.getElementById("coefficientC").value;
        
        if ($(a).isNumeric() && $(b).isNumeric() && $(c).isNumeric()) {
        
        var epsilon = 1.0e-10;
        var str = "";

        if (isNumberEqual0(a, epsilon)) {
            if (!isNumberEqual0(b, epsilon)) {
                var x = -c / b;
                console.log(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                console.log(str.concat("X = ", x, "\n"));
                $("#solutionField").append(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                $("#solutionField").append(str.concat("X = ", x, "\n"));
            } else if (isNumberEqual0(b, epsilon) && !isNumberEqual0(c, epsilon)) {
                console.log(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                console.log("у данного выражения решений нет");
                $("#solutionField").append(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                $("#solutionField").append("у данного выражения решений нет");

            } else {
                console.log(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                console.log("в данном выражении Х может принимать любые значения");
                $("#solutionField").append(str.concat("ваше уравнение имеет вид: ", b, " * X + ", c, " = 0\n"));
                $("#solutionField").append("в данном выражении Х может принимать любые значения");
            }
        } else {
            console.log(str.concat("ваше уравнение имеет вид: ", a, " * X^2 + ", b, " * X + ", c, " = 0\n"));
            $("#solutionField").append(str.concat("ваше уравнение имеет вид: ", a, " * X^2 + ", b, " * X + ", c, " = 0\n"));
            var discriminant = b * b - 4 * a * c;
            console.log(str.concat("Дискриминант = ", b, " * ", b, " - 4 * ", a, " * ", c, " = ", discriminant, "\n"));
            $("#solutionField").append(str.concat("Дискриминант = ", b, " * ", b, " - 4 * ", a, " * ", c, " = ", discriminant, "\n"));

            if (isGreaterThan0(discriminant, epsilon)) {
                console.log("Уравнение имеет 2 корня: \n");
                $("#solutionField").append("Уравнение имеет 2 корня: \n");

                var squareRootFromDiscriminant = Math.sqrt(discriminant);
                var x1 = (-b + squareRootFromDiscriminant) / (2 * a);
                var x2 = (-b - squareRootFromDiscriminant) / (2 * a);
                console.log(str.concat("X1 = (-", b, " + ", squareRootFromDiscriminant, ") / (2 * ", a, ") = ", x1, "\n"));
                console.log(str.concat("X2 = (-", b, " - ", squareRootFromDiscriminant, ") / (2 * ", a, ") = ", x2, "\n"));
                $("#solutionField").append(str.concat("X1 = (-", b, " + ", squareRootFromDiscriminant, ") / (2 * ", a, ") = ", x1, "\n"));
                $("#solutionField").append(str.concat("X2 = (-", b, " - ", squareRootFromDiscriminant, ") / (2 * ", a, ") = ", x2, "\n"));
            } else if (isNumberEqual0(discriminant, epsilon)) {
                console.log("Уравнение имеет 1 корень:\n");
$("#solutionField").append("Уравнение имеет 1 корень:\n");
                var x1 = -b / (2 * a);
                console.log(str.concat("X1 = (-", b, ") / (2 * ", a, ") = ", x1, "\n"));
                $("#solutionField").append(str.concat("X1 = (-", b, ") / (2 * ", a, ") = ", x1, "\n"));
            } else {
                console.log("Дискриминант меньше 0, следовательно у данного уравнения корней нет");
                $("#solutionField").append("Дискриминант меньше 0, следовательно у данного уравнения корней нет");
            }
        }

        function isGreaterThan0(x, epsilon) {
            return x > epsilon;
        }

        function isNumberEqual0(x, epsilon) {
            return (Math.abs(x) <= epsilon);
        }
        }
        else {alert("Значения коэффициентов должны быть числовые /n");}
        
    });
});