// n, m: expected number of presses, the actual number of presses
// from the 2nd row to the (n+1)th row: the actual time recorded. 
// from the from the n+2 th row to the (n+m+1)th row: the expected time

// where both n and m are the actual & expected outcome for presses time


let rythmFlow = (n, m) => {
    let stillOn = True;

    if(m.length > 2 *n.length){
        stillOn = False;
    }

    let score = []; 
    while(stillOn){
        for(let i=0; i<m.length; i++){
            let Finalscore = 0;
            let timeDiff = m[i] - n[i]; 

            if(timeDiff <= 15 && timeDiff >=0) { 
                score[i] = 7;
                Finalscore =+ 7;}
            else if(timeDiff <= 23 && timeDiff> 15) { 
                score[i] = 6;
                Finalscore =+ 6}
            else if(timeDiff <= 43 && timeDiff > 23){ 
                score[i] = 4;
                Finalscore =+ 4
            } 
            else if(timeDiff <= 102 && timeDiff > 43){ 
                scorer[i] = 2;
                Finalscore =+ 2}; 

        }

        const mean = array.reduce((a, b) => a + b) / m.length; 
        let sd =  Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / m.length)


        if(Finalscore >= 5*n.length && sd <= 85){
            return "passed!"
        } else {
            return "failed!"
        }      

    }


    print("the typing is wildly inaccurate"); 
}