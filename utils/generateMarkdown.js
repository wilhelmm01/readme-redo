function generateMarkdown(data) {
  return `# ${data.project}

## Description
${data.description}


`;
}

module.exports = generateMarkdown;
