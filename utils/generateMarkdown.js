function generateMarkdown(data) {
  return `# ${data.project}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-red.svg)
## Description

${data.description}

##Table of Contents
* [Installation Instructions](#installation-instructions)
* [App Uses](#app-uses)
* [License Information](#license-information)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)


## Installation Instructions
${data.install}
## App Uses
${data.uses}
## License Information
${data.license}
## Contribution
${data.contribution}
##Tests
${data.test}

## Questions
Please contact me at ${data.email}. You may also visit my github page at https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
