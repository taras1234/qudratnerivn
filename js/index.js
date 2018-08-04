const a = parseFloat(prompt('please enter a'));
const b = parseFloat(prompt('please enter b'));
const c = parseFloat(prompt('please enter c'));
if(a!=0)
    function square (a, b, c) {
        const d = (b*b)-(4*a*c);
        const disqr = Math.sqrt(d);
        if(d>=0){
            const x1= (-b-disqr)/(2*a);
            const x2= (-b+disqr)/(2*a);
            return (x1 , x2);
        }if (d==0){
            const x3 = -b/(2*a);
            return x3;
        }else{
            return 'no solution';
        }
    }

const result = square(a, b, c);
alert (result);