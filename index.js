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
            { name: 'None', value: 'none' },
            { name: 'Apache License 2.0', value: 'apache-license-2.0' },
            { name: 'GNU General Public License v3.0', value: 'gnu-general-public-license-v3.0' },
            { name: 'MIT License', value: 'mit-license' },
            { name: 'BSD 2-Clause Simplified License', value: 'bsd-2-clause-simplified-license' },
            { name: 'BSD 3-Clause New or Revised License', value: 'bsd-3-clause-new-or-revised-license' },
            { name: 'Boost Software License 1.0', value: 'boost-software-license-1.0' },
            { name: 'Creative Commons Zero v1.0 Universal', value: 'creative-commons-zero-v1.0-universal' },
            { name: 'Eclipse Public License 2.0', value: 'eclipse-public-license-2.0' },
            { name: 'GNU Affero General Public License v3.0', value: 'gnu-affero-general-public-license-v3.0' },
            { name: 'GNU General Public License v2.0', value: 'gnu-general-public-license-v2.0' },
            { name: 'GNU Lesser General Public License v2.1', value: 'gnu-lesser-general-public-license-v2.1' },
            { name: 'Mozilla Public License 2.0', value: 'mozilla-public-license-2.0' },
            { name: 'The Unlicense', value: 'the-unlicense' },
        ],
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
    }
  ])
  .then((answers) => {
    const { title, description, installation, usage, license, contributing, tests, email, username } = answers;
    const licenseChoices = answers.license.value;
    console.log(licenseChoices);
    const answersHtml = `<!DOCTYPE html>
                            <head>
                                <meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <link rel="stylesheet" href="assets/css/style.css">
                                <title>Document</title>
                            </head>
                            <title>${title}</title>
                            <body>
                                <h2 class="title">Copy and past the below generated text into your README file. Your README file will be correctly formatted in markdown!</h2>
                                <div class="main">
                                    <h3># ${title}</h3>
                                    <ul>
                                        <li>[Description](#description)&lt;br&gt;</li>
                                        <li>[Installation](#installation)&lt;br&gt;</li>
                                        <li>[Usage](#usage)&lt;br&gt;</li>
                                        <li>[License](#license)&lt;br&gt;</li>
                                        <li>[Contributing](#how-to-contribute)&lt;br&gt;</li>
                                        <li>[Tests](#tests)&lt;br&gt;</li>
                                        <li>[Questions](#questions)&lt;br&gt;&lt;br&gt;</li>
                                    </ul>
                                    ![License](https://img.shields.io/badge/License-${license.value}-blue.svg)&lt;br&gt;&lt;br&gt;
                                    <h3>## Description</h3>
                                    <p>${description}</p>
                                    <h3>## Installation</h3>
                                    <p>${installation}</p>
                                    <h3>## Usage</h3>
                                    <p>${usage}</p>
                                    <h3>## License</h3>
                                    <p>This application is coverred under the ${license.name} license.</p>
                                    <h3>## How to Contribute</h3>
                                    <p>${contributing}</p>
                                    <h3>## Tests</h3>
                                    <p>${tests}</p>
                                    <h3>## Questions</h3>
                                    <p>Feel free to contact me with any questons about this applications.</p>
                                    <p>Find my Github [here](https://github.com/${username})</p>
                                    <p>Email me: ${email}</p>
                                <div>
                            </body>
                        </html>`;

    fs.writeFile('index.html', answersHtml, (err) => {
      err ? console.error(err) : console.log('Success!, open the index.html file in your browser to view');
   });
  })
  .catch((error) => console.log(error));

  