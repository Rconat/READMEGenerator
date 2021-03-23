// function to create the markdown file
const generateMarkdown = (data) => {
    const { title, description, installation, usage, credits, github, email, license } = data

    return `# ${title}

## Description

${description}

---

## Table of contents

* [installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

---

## Installation

${installation}

---

## Usage

${usage}

---

## Credits

${credits}

---

## License

This application is licensed under ${license}.

---

## Questions

If you have any questions about this project you can contact me through [Github](https://github.com/${github} or send me an email at ${email}.
`
}

module.exports = generateMarkdown