const { convertJsonFileToYaml } = require('./index');

const yamlString = convertJsonFileToYaml('./sample2.json', 'output2.yaml');

if (yamlString) {
  console.log(yamlString);
}