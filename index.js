import inquirer from 'inquirer';
import fs from 'fs';

// Title Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
  .prompt([
    {
        // title
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        // Description
        type: 'input',
        message: 'Write a short description of your project.',
        name: 'description',
    },
    {
        // Installation
        type: 'input',
        message: 'What are the steps required to install your application and get it running?',
        name: 'installation',
    },
    {
        // Usage
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        // License
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        filter: function(input) {
            // Convert the license name to a lowercase string with no spaces
            return input.toLowerCase().replace(/ /g, '');
          },
        // output is modified to lowercase and remove spaces
    },
    {
        // Features
        type: 'input',
        message: 'List key features and functionalities of the project?',
        name: 'features',
    },
    {
        // Contributing
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contributing',
    },
    {
        // Tests
        type: 'input',
        message: 'What are some tests you ran for your project?',
        name: 'tests',
    },
    {
        // Email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        // validate: function(input) {
        //     // validates the email address
        //     const emailRegex = /\S+@\S+\.\S+/;
        //     if (emailRegex.test(input)) {
        //         return true;
        //     } else {
        //         return 'Please enter a valid email address';
        //     }
        // }
    },
    {
        // Github username
        type: 'input',
        message: 'Please enter your Github username.',
        name: 'username',
    },
    {
        // Credits
        type: 'input',
        message: 'List any people or recources that contributed to the projects?',
        name: 'credits',
    }
  ])
  .then((answers) => {
    const { title, description, installation, usage, license, features, contributing, tests, email, username, credits } = answers;
    console.log(license);
    const answersMd = `
# ${title}
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Features](#features)  
[Contributing](#how-to-contribute)  
[Tests](#tests)  
[Questions](#questions)  
[Credits](#credits)

![License](https://img.shields.io/badge/License-${license}-blue.svg)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Features
${features}

## How to Contribute
${contributing}

## Tests
${tests}

## Questions
Feel free to contact me with any questions about this application.
* Find my Github [here](https://github.com/${username}).
* Email me: [${email}](mailto:${email})

## Credits
* ${credits}`;
    fs.writeFile('testreadme.md', answersMd, (err) => {
      err ? console.error(err) : console.log('Success!, open the index.html file in your browser to view');
   });
  })
  .catch((error) => console.log(error));

  