const { convertJsonFileToYaml } = require('./index');

const yamlString = convertJsonFileToYaml('./sample1.json', 'output1.yaml');

if (yamlString) {
  console.log(yamlString);
}