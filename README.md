# ▼AIDEN

Artificial Intelligence Designed for Extensions in Node


## About the project

AIDEN is an open-source chatbot built on the idea of being entirely modular. It consists of an API with a single endpoint ready 
to receive a string (the user input), routing it to the appropriate modules based on the words or expressions found, and returning a valid response.
It is currently in alpha stage.

### Built With

* [NodeJS](https://nodejs.org/en/)


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```
   git clone https://github.com/ThalesLudwig/aiden.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Serve
   ```
   npm start
   ```

   
### Usage

A single endpoint ("/") will be served for POST requests:
   ```
   {
     "data": "what can you do?",
     "lang": "en-US"
   }
   ```
   If no "lang" is provided, en-US will always be used as default.

## Modules

### Structure

All Modules are simple Javascript functions that will receive as argument an object with three properties: **lang**, **context**, and **expression**, 
and return the expected response with no specific format.
- lang: the language currently used by the user, such as "en-US" or "pt-BR"
- context: an array of previous user inputs
- expression: the word or expression inputed by the user that was recognized by the module

Each module can have as many files and whatever logic you want, but the main file shoud be **index.js**.
With the exception of the Finder, which is called directly by the Orchestrator, all modules will follow the same structure.

```
// src/modules/my-module/index.js

const MyModule = ({ expression, lang, context }) => {
  // DO SOME LOGIC HERE
  return desiredResponse;
};

module.exports = MyModule;
```

### Adding new modules

- Open `/config.js` and add your new Module's name to the MODULES array. Do not use spaces or special chars here, as this should be the same name of your folder (case-sensitive)
- On `/src/modules/` create a folder with the same name as before, i.e. `my-module`
- On `/src/modules/my-module/`, create the index.js file

A module is called when a user-inputed expression is recognized, so you need to inform what expressions or words should trigger this module's execution.
Any language is accepted as longs as it follows the ISO 639-1 standard, but keep in mind that english (en-US) will always be used by default if no other language is specified.

- On `/src/modules/my-module/`, create a file `en-US.js` (or any other language you want to support, case-sensitive)

This file should return a simple array of strings containing the words or expressions you wish to be recognized by your module:

```
// src/modules/my-module/en-US.js

module.exports = ["hi", "e-mail", "new message", "verify", "remove", "send message to"];
```

### Adding new languages

- Open `/config.js` and add your new supported language code to the LANGUAGUES array.

Your module's language file will not be recognized if the language code is not specified here.


## Contributing

I am accepting contributions. Any contributions you make, be it bug fixes or new features, are **greatly appreciated**.

## License

Distributed under the MIT License.

<!-- CONTACT -->
## Contact

- Twitter: [@thalesludwig](https://twitter.com/thalesludwig)
- Linkedin: [in/thalesludwig](https://linkedin.com/in/thalesludwig)
- E-mail: thales.ludwig@gmail.com
