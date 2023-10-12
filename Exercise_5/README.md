# Questions

1. Work out the error message generated.
2. What is NaN (num)?
3. What does parseInt() do?
4. How does try catch finally work?

## Question One

### Error message for entering number greater than 5:

Number is greater than 5

### Error message for entering an invalid integer (parser found to be NaN)

You did not enter a number!

## Question Two

NaN means "Not A Number" - the parser could not figure out the integer value of the value it was given

### Question Three

parseInt() tries to take an input (string) and attempts to get an integer value from it. For example "2" (string) -> 2 (int) however an invalid response would return NaN; For example: "a" (string) -> NaN

### Question Four

Try Catch Finally block works to attempt to run code in try statement. If failure occurs (exception) the code will then stop executing the try block and run the code within the catch block. After either the successful execution of the try or catch block the finally block will always be run.