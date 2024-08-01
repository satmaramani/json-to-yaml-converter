const fs = require('fs');
const yaml = require('js-yaml');

/**
 * Converts JSON to YAML.
 * @param {Object} json - The JSON object to convert.
 * @returns {string} - The converted YAML string.
 */
function jsonToYaml(json) {
  try {
    return yaml.dump(json);
  } catch (e) {
    console.error('Error converting JSON to YAML:', e);
    return null;
  }
}

/**
 * Reads a JSON file and converts its content to YAML.
 * Optionally saves the YAML content to a specified output file.
 * @param {string} inputFilePath - Path to the JSON file.
 * @param {string} [outputFilePath] - Optional path to save the YAML file.
 * @returns {string|null} - The converted YAML string or null if there was an error.
 */
function convertJsonFileToYaml(inputFilePath, outputFilePath) {
  try {
    const fileContents = fs.readFileSync(inputFilePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    const yamlString = jsonToYaml(jsonData);

    if (outputFilePath) {
      fs.writeFileSync(outputFilePath, yamlString, 'utf8');
      console.log(`YAML content saved to ${outputFilePath}`);
    }

    return yamlString;
  } catch (e) {
    console.error('Error reading or converting the JSON file:', e);
    return null;
  }
}

module.exports = { jsonToYaml, convertJsonFileToYaml };