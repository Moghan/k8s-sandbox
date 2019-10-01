const arr = new Array(100);
arr.fill(0);

export const n_ob_x = (n = 1, x = 6) => {

    let ones = 0;
    let tops = 0;

    let s = 0;
    let base = n;

    const isPerfect = () => {
        if (n === 2 && ones === n) {
            return true;
        } else if (n > 2) {
            if (ones >= n - 1 ) {
                return true;
            }
        }
        return false;
    }

    const isFummel = () =>  {
        if (n === 2 && tops === n) {
            return true;
        } else if (n > 2) {
            if (tops >= 2) {
                return true;
            }
        }
        return false;        
    }

    for (let a = n; a !== 0 ; ) {
        const roll = Math.floor(Math.random() * x + 1 );
    
        if (roll === x) {
            a++;
        } else {
            s += roll;
            a--
        }
        if (base > 0) {
            // console.log("base roll",base, roll);
            if (roll === 1) {
                ones++;
            } else if (roll === x) {
                tops++;
            }
        }
        base--
    }
     
    

    const result = {
        perfect: isPerfect(),
        fummel: isFummel(),
        sum: s
    }
    console.log("res ", result);
    return result;
}

const roll = () => {
    for (let a = 0 ; a < 10 ; a++) {
        n_ob_x(3,6);
    }
}

export default roll;