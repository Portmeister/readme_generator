// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
# Description
${data.description}
${data.descriptionOne}
${data.descriptionTwo}
${data.descriptionThree}
  
# Features
${data.features}

# Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  
# Installation
${data.installation}
  
# Usage
${data.usage}
  
# Contributing
${data.credits}
${data.creditsOne}
${data.creditsTwo}
  
# Tests
${data.test}`;
}

module.exports = generateMarkdown;
