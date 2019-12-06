var expression = ''
var buffer_scr = ''
var buffer_exp = ''
var e = Math.E
var pi = Math.PI
var rad = false
var random = 0

function emptyScreen() {
    /**
     * Cleans screen after a 'SyntaxError' or 'BufferEmpty' is found
     */
    if (expression == 'SyntaxError' || expression == 'BufferEmpty') {
        document.getElementById('scr').innerHTML = ''
        expression = ''
    }
}

function factorial(n) {
    /**
     * Calculates the factorial of n
     * @param {int} n An integer to compute the factorial
     */
    if (n == 0) {
        return 1
    } else if (n == 1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}

function to_radians(angle) {
    /**
     * Converts angle from degrees to radians
     * @param {int, float} angle Angle in degrees
     */
    return angle * pi / 180
}

/* First Row */

document.getElementById('(').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '(';
    expression += '('
});

document.getElementById(')').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += ')';
    expression += ')'
});

document.getElementById('mc').addEventListener('click', function() {
    emptyScreen()
    buffer_scr = ''
    buffer_exp = ''
});

document.getElementById('m+').addEventListener('click', function() {
    emptyScreen()
    buffer_scr = document.getElementById('scr').innerHTML
    buffer_exp = expression
});

document.getElementById('m-').addEventListener('click', function() {
    emptyScreen()
    buffer_scr -= document.getElementById('scr').innerHTML
    buffer_exp -= expression
});

document.getElementById('mr').addEventListener('click', function() {
    emptyScreen()
    if (buffer_scr == '') {
        document.getElementById('scr').innerHTML = 'BufferEmpty'
        expression = 'BufferEmpty'
    } else {
        document.getElementById('scr').innerHTML = buffer_scr
        expression = buffer_exp
    }
});

document.getElementById('AC').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML = '';
    expression = ''
});

document.getElementById('+/–').addEventListener('click', function() {
    emptyScreen()
    if (expression[0] != '–') {
        document.getElementById('scr').innerHTML = '–' + document.getElementById('scr').innerHTML;
        expression = '–' + expression
    } else {
        document.getElementById('scr').innerHTML = document.getElementById('scr').innerHTML.slice(1,)
        expression = expression.slice(1,)
    }

});

document.getElementById('%').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '%';
    expression += '%'
});

document.getElementById('/').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '/';
    expression += '/'
});

/* Second Row */

document.getElementById('Rnd').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML = 'Round(' + document.getElementById('scr').innerHTML + ')';
    expression = 'Math.round(' + expression + ')'
});

document.getElementById('x^2').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '^2';
    expression += '**2'
});

document.getElementById('x^3').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '^3';
    expression += '**3'
});

document.getElementById('x^y').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '^';
    expression += '**'
});

document.getElementById('e^x').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += 'e^';
    expression += 'e**'
});

document.getElementById('10^x').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '10^';
    expression += '10**'
});

document.getElementById('7').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '7';
    expression += '7'
});

document.getElementById('8').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '8';
    expression += '8'
});

document.getElementById('9').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '9';
    expression += '9'
});

document.getElementById('x').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += 'x';
    expression += '*'
});

/* Third row */

document.getElementById('1/x').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML = '1/'+ document.getElementById('scr').innerHTML
    expression = '1/' + expression
});

document.getElementById('sqrt').addEventListener('click', function() {
    emptyScreen()
    let tmp_scr = document.getElementById('scr').innerHTML
    document.getElementById('scr').innerHTML = 'sqrt(' + tmp_scr + ')';
    expression += '**(1/2)'
});

document.getElementById('cbrt').addEventListener('click', function() {
    emptyScreen()
    let tmp_scr = document.getElementById('scr').innerHTML
    document.getElementById('scr').innerHTML = 'cbrt(' + tmp_scr + ')';
    expression += '**(1/3)'
});

document.getElementById('yrt').addEventListener('click', function() {
    emptyScreen()
    let tmp_scr = document.getElementById('scr').innerHTML
    document.getElementById('scr').innerHTML = buffer_scr + 'rt(' + tmp_scr + ')';
    expression += '**(1/buffer_exp)'
});

document.getElementById('ln').addEventListener('click', function() {
    emptyScreen()
    let tmp_scr = document.getElementById('scr').innerHTML
    document.getElementById('scr').innerHTML = 'ln(' + tmp_scr + ')';
    expression = 'Math.log(' + expression + ')'
});

document.getElementById('log10').addEventListener('click', function() {
    emptyScreen()
    let tmp_scr = document.getElementById('scr').innerHTML
    document.getElementById('scr').innerHTML = 'log10(' + tmp_scr + ')';
    expression = 'Math.log10(' + expression + ')'
});

document.getElementById('4').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '4';
    expression += '4'
});

document.getElementById('5').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '5';
    expression += '5'
});

document.getElementById('6').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '6';
    expression += '6'
});

document.getElementById('–').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '–';
    expression += '–'
});

/* Fourth row */

document.getElementById('x!').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '!';
    expression = 'factorial(' + expression + ')'
});

document.getElementById('sin').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'sin(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.sin(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'sin(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.sin(' + to_radians(expression) + ')'
    }

});

document.getElementById('cos').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'cos(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.cos(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'cos(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.cos(' + to_radians(expression) + ')'
    }
});

document.getElementById('tan').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'tan(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.tan(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'tan(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.tan(' + to_radians(expression) + ')'
    }
});

document.getElementById('e').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += 'e';
    expression += 'Math.exp(1)'
});

document.getElementById('EE').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += 'x10^';
    expression += '*10**'
});

document.getElementById('1').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '1';
    expression += '1'
});

document.getElementById('2').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '2';
    expression += '2'
});

document.getElementById('3').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '3';
    expression += '3'
});

document.getElementById('+').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '+';
    expression += '+'
});

/* Fifth row */

document.getElementById('Rad').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('Rad').style.background = 'DarkGray'
    } else {
        document.getElementById('Rad').style.background = 'Tomato'
    }
    rad = !rad
});

document.getElementById('asin').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'asin(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.asin(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'asin(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.asin(' + to_radians(expression) + ')'
    }
});

document.getElementById('acos').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'acos(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.acos(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'acos(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.acos(' + to_radians(expression) + ')'
    }
});

document.getElementById('atan').addEventListener('click', function() {
    emptyScreen()
    if (rad == true) {
        document.getElementById('scr').innerHTML = 'atan(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.atan(' + expression + ')'
    } else {
        document.getElementById('scr').innerHTML = 'atan(' + document.getElementById('scr').innerHTML + ')'
        expression = 'Math.atan(' + to_radians(expression) + ')'
    }
});

document.getElementById('pi').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += 'pi';
    expression += 'pi'
});

document.getElementById('Rand').addEventListener('click', function() {
    emptyScreen()
    random = Math.random()
    document.getElementById('scr').innerHTML += random;
    expression += 'random'
});

document.getElementById('0').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '0';
    expression += '0'
});

document.getElementById('.').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += '.';
    expression += '.'
});

document.getElementById(',').addEventListener('click', function() {
    emptyScreen()
    document.getElementById('scr').innerHTML += ',';
    expression += ','
});

document.getElementById('=').addEventListener('click', function() {
    if (expression != '') {
        try {
            let result = eval(expression)
            document.getElementById('scr').innerHTML = result
            expression = result
        }
        catch(SyntaxError) {
            document.getElementById('scr').innerHTML = 'SyntaxError'
            expression = 'SyntaxError'
        }
    } else {
        /* Address the case when no input has been given */
        document.getElementById('scr').innerHTML = 'SyntaxError'
        expression = 'SyntaxError'
    }
});