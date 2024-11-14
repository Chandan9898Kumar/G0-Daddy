# Getting Started with install and run the project

`To run the project, follow these steps:`

1. ### Verify the File

   1. Open the file in your preferred code editor (e.g., `Visual Studio Code`).
   2. Check if you are in the correct directory by running the command : `pwd` (Present Working Directory) in your terminal.
   3. If you are not in the `godaddy directory`, navigate to it by running the command : `cd godaddy`.

2. ### Verify File Presence

   Run the command `ls` to ensure all necessary files are present in the directory.

3. ### Now install the dependencies

   Run the command `npm install` which will install all the dependencies .

4. ### After installing the dependencies, Start the application.

   Run the command `npm start` which starts the Application.

5. ### To Run Test case

   Run the command `npm run test --coverage`.

### Key Features and Optimizations

**To ensure a seamless user experience, I have implemented the following features and optimizations:**

1. **State Management:** Utilized the Redux Toolkit library to efficiently manage application state, eliminating the need for prop drilling and promoting a more scalable architecture.

2. **Image Optimization:** Implemented lazy loading for images using the loading='lazy' attribute, reducing page load times and improving overall performance.

3. **Code Splitting:** Employed code splitting techniques to optimize page performance, allowing for faster rendering and improved user experience.

4. **Error Handling:** Implemented error boundaries at the app level to catch and handle errors, ensuring a robust and reliable application.

5. **Browser Compatibility:** Developed a fallback mechanism to accommodate older browsers, redirecting users to alternative pages with relevant information.

6. **Testing:** Utilized the Jest testing library to write comprehensive test cases, ensuring the application's stability and reliability.

7. **Reusable Components:** Created reusable UI components, such as Button and Loader, to promote code reusability and maintain a consistent design language throughout the application.

8. **Modular Architecture:** Implemented a modular architecture to organize and manage components in a structured and scalable manner, promoting reusability, maintainability, and efficient development.
