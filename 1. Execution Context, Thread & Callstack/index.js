let outerGoal = 0;

console.log(outerGoal);

function addGoal(count) {
    let innerGoal = 0;
    innerGoal = innerGoal + count;
    return innerGoal;
}

const storedEvaluatedValue = addGoal(1);

console.log(storedEvaluatedValue);