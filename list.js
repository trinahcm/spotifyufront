const people = [
    { name: 'adri' },
    { name: 'becky' },
    { name: 'chris' },
    { name: 'dillon' },
    { name: 'evan' },
    { name: 'frank' },
    { name: 'georgette' },
    { name: 'hugh' },
    { name: 'igor' },
    { name: 'jacoby' },
    { name: 'kristina' },
    { name: 'lemony' },
    { name: 'matilda' },
    { name: 'nile' },
    { name: 'ophelia' },
    { name: 'patrick' },
    { name: 'quincy' },
    { name: 'roslyn' },
    { name: 'solene' },
    { name: 'timothy' },
    { name: 'uff' },
    { name: 'violet' },
    { name: 'wyatt' },
    { name: 'x' },
    { name: 'yadri' },
    { name: 'zack' },
]

whateverElement.addEventListener("event type", () => {
    const searchInput = document.querySelector('.input');
    
    searchInput.addEventListener("input", (e) => {
        // inside, we will need to achieve a few things:
        // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
        let value = e.target.value;

        // 2. check: if input exists and if input is larger than 0
        if (value && value.trim().length > 0) {
            // 3. redefine 'value' to exclude white space and change input to all lowercase
            value = value.trim().toLowerCase();
            // 4. return the results only if the value of the search is included in the person's name
            // we need to write code (a function for filtering through our data to include the search input value)
        }
        setList(people.filter(person => {
            return person.name.includes(value)
        }))

     }); 
});

function setList(results) {

    for (const person of results) {
        // creating a li element for each result item
        const resultItem = document.createElement('li');

        // adding a class to each item of the results
        resultItem.classList.add('result-item');

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name);

        // appending the text to the result item
        resultItem.appendChild(text);

        // appending the result item to the list
        list.appendChild(resultItem);
    }
}