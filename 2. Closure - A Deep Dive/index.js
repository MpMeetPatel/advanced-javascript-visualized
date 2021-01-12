// example 1
function calmMan() {
    console.info("Calmness is choice, and it's taken 😇");
};

calmMan.argumentsForBeingRight = '0%';
calmMan.quetionsOnTopics = '100%';

// example 2
function createCapital() {
    let wealth = 'freedom where you live your time';

    function getCapital() {
        console.log(wealth);
        return wealth;
    }

    return getCapital;
};


const accessCapital = createCapital();

accessCapital();

// example 3
function createCapital(definitionOfWealth) {
    let wealth = definitionOfWealth; // your definition for wealth😅

    const capitalObj = {
        getCapital: function() {
            console.log(wealth)
        }
    }

    return capitalObj;
}

const accessCapital = createCapital("freedom where you live your time");

accessCapital();