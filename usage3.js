const { convertJsonFileToYaml } = require('./index');

const yamlString = convertJsonFileToYaml('./sample3.json', 'output3.yaml');

if (yamlString) {
  console.log(yamlString);
}