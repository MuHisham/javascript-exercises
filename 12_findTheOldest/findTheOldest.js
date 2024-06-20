const findTheOldest = function(people) {

    let oldestPerson = people.reduce((greatestPerson, person) => {
        if (!person.hasOwnProperty('yearOfDeath')) person.yearOfDeath = new Date().getFullYear();
        if (!greatestPerson.hasOwnProperty('yearOfDeath')) greatestPerson.yearOfDeath = new Date().getFullYear();
        let currentAge = person.yearOfDeath - person.yearOfBirth;
        let greatestAge = greatestPerson.yearOfDeath - greatestPerson.yearOfBirth;
        if (currentAge > greatestAge) greatestPerson = person;
        return greatestPerson;
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
