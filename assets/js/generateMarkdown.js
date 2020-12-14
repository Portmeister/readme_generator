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

Here are some guidelines to help you get started:

The application will be invoked by using the following command:

\`\`\`bash
${data.installation}
\`\`\`

  
# Usage

${data.usage}

# License

${data.license}
  
# Contributing

${data.credits}

${data.creditsOne}

${data.creditsTwo}

# Tests

${data.test}

# Questions

Below are some of my contact details should you wish to contact me regarding questions or contributions to this project.

GitHub: github.com/${data.github}

Email: ${data.email}`;
}

module.exports = generateMarkdown;
