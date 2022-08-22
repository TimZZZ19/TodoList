<h2><strong>General Intro</strong></h2><br>
This Todo List was implemented using React. Since this a simple project, there are four React functional components built in this project: <em><b>App</b></em>, <em><b>Form</b></em>, <em><b>List</b></em> and <em><b>Todo</b></em>; the key states that are shared among different components are <em><b>todos</b></em> and <em><b>filterValue</b></em>.

<h2><strong>Breakdown</strong></h2><br> 
<br>
<h4><strong>todos</strong></h4>
The todos variable is an array that contains all the todo items that need to be rendered to the screen by the List component and so it is passed down to the List component. The information included in each and every element of todos is: todo, completed, and id, where todo is the name of the item, completed is a boolean variable which marks if this item has been completed and lastly id, created by using the package uuid, is used as key when the item gets rendered as an item of list. The setTodos method is passed to the Form component so when the user enters a new item, this method will be used to create a new todo item for the todos array.

<h4><strong>filterValue</strong></h4>
Another key piece of information for this App to work is filterValue, which determines what items should be displayed on the screen, the completed todos, the uncompleted todos or all todos. The form component has the setFiltervalue method so it can control this operation and the filterValue is given to the List component to render certain category of items depending on user's choice of filterValue.

<h4><strong>App</strong></h4>
The App component is basically the glue that holds all things togehter in that it stores the todos and filterValue states as two states, the Form and List components serve as its subcomponents. Another <b>key feature</b> of this App is its ability of persisting user data, so when the page gets refreshed, the data won't get lost; this was achieved by utilizing the localStorage mechanism of the Web Storage API. In order to fully utilize this mechanism, the useEffect hook was used two times in this component: first, it was used to wrap the code of storing data to local storage, and with the todos array as the only dependency, every time when todos changed, the most recent todos would be stored in local storage; second, the hook was used to retrieve previously saved data from local storage when the page gets refreshed, this was achieved by using an empty array as dependency so the hook only runs once after the component gets mounted. One important thing to note is that the second useEffect block has to go before the first one, this is because when the page reloads, if the first block runs first, then the data in local storage will be set to empty array because at this point todos is empty, so we will end up losing all the previous data. Another thing to note is the strict mode. The strict mode forces certain components to run twice; due to this effect and along with the fact that useEffect only runs once after the component mounts, we will also end up losing all the previous data, so in order to see the data persistence effect in action during the development phase, the strict mode has to be turned off.

<h4><strong>Form</strong></h4>
In the Form component, three pieces of data are managed: newTodo, errorMsgShown and inputRef. Since the main function of Form is to take user input todo and push that new todo to the todos array, so first a newTodoChangeHandler function was created and was attached to the input element and then a newTodoSubmitHanlder function was created in which the setTodo function was called to push the new todo item to the todos array. If the user hits enter with an empty input, then a warning message will show up. This was done with the help of a css class and a boolean varialbe (errorMsgShown). Another nice feature which is worth mentioning is the auto focus feature of the input field. So every time when the page reloads or is opened for the first time, the input field will automatically gets focused so the user won't have to click it first. This feature was implemented with the help of the useRef and useEffect hooks. Another main function of the Form component is to filter certain todos out based on user's selection of filter value.

<h4><strong>List</strong></h4>
The function of the List component is to take the most recent todos array and render it to an unordered list as per user's choice of filtering demand. This was done with the help of the fourth component of this project - the Todo component. One thing I'm really proud of about this project is that I was able to identify the repetitive part of my code and was able to tidy it up using higher order function. For instance, I saw that no matter what the filter value was, the mapping part was always involved when rendering the todos array; the only difference was the filtering part. This filtering part took a callback function and this callback function looked different for all the three filtering conditions, so I created a generic function called makeList which took a callback and the todos array as its parameters. This way I was able to call the same high order function but with three different filtering logics for these three conditions. The result was a much cleaner block of code.
