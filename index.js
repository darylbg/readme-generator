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
        type: 'input',
        message: 'What license does your project use?',
        name: 'license',
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
        // Questions
        type: 'input',
        message: 'If anyone want to ask you a question, or provide feedback, what email address can they contact you on?',
        name: 'questions',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const {title, description, installation, usage, license, contributing, tests, questions} = answers;
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
                                <div>
                                    <nav>
                                        <ul>
                                            <li>[Description](#description)</li>
                                            <li>[Installation](#installation</li>
                                            <li>[Usage](#usage)</li>
                                            <li>[Contributing](#contributing)</li>
                                            <li>[Tests](#tests)</li>
                                            <li>[Questions](#questions)</li>
                                        </ul>
                                    </nav>
                                    <h1># ${title}</h1>
                                    <h3## Description</h3>
                                    <p>${description}</p>
                                    <h3>## Installation</h3>
                                    <p>${installation}</p>
                                    <h3>## Usage</h3>
                                    <p>${usage}</p>
                                    <h3>## License</h3>
                                    <p>${license}</p>
                                    <h3>## Contributing</h3>
                                    <p>${contributing}</p>
                                    <h3>## Tests</h3>
                                    <p>${tests}</p>
                                    <h3>## Questions</h3>
                                    <p>${questions}</p>
                                </div>
                            </body>
                        </html>`;

    fs.writeFile('index.html', answersHtml, (err) => {
      err ? console.error(err) : console.log('Success!');
   });
  })
  .catch((error) => console.log(error));

  