const { convertJsonFileToYaml } = require('./index');

const yamlString = convertJsonFileToYaml('./sample4.json', 'output4.yaml');

if (yamlString) {
  console.log(yamlString);
}