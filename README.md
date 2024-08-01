# JSON to YAML Converter

json-to-yaml-converter
A simple yet powerful utility for converting JSON objects / JSON files to YAML format. This package provides an easy way to read JSON content from an object file and convert it into a human-readable YAML format. The converted YAML can also be saved to an output file if specified.

### Features:
Convert JSON to YAML: Read JSON content from a file or from json object and convert it to YAML format.

Optional File Output: Save the converted YAML content to a specified output file.

Easy Integration: Simple API for seamless integration into your projects.

# Example Usage:

## Installation

```sh
npm install json-to-yaml-converter
```

### Direct JSON Code Example 1

## Example 1
```plaintext

const { jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

//single level
const json = {
  name: 'MyApp',
  version: '1.0.0',
  description: 'An example app'
};

const yamlString = jsonToYaml(json);
console.log(yamlString);

```

#### Output 1
```plaintext

name: MyApp
version: 1.0.0
description: An example app

```

### Direct JSON Code Example 2

## Example 2
```plaintext

const { jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

//two level 
const json =  {
    "app": {
        "name": "MyApp",
        "version": "1.0.0",
        "description": "An example app"
    }
}

const yamlString = jsonToYaml(json);
console.log(yamlString);

```

#### Output 2

```plaintext
app:
  name: MyApp
  version: 1.0.0
  description: An example app

```

### Direct JSON Code Example 3

## Example 3
```plaintext

const { jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

//three level 
const json =  {
    "app": {
        "name": "MyApp",
        "version": "1.0.0",
        "description": "An example app",
        "database": {
            "host": "localhost",
            "port": 5432,
            "name": "myapp_db"
        }
    }
}

const yamlString = jsonToYaml(json);
console.log(yamlString);

```

#### Output 3

```plaintext
app:
  name: MyApp
  version: 1.0.0
  description: An example app
  database:
    host: localhost
    port: 5432
    name: myapp_db


```


### Code Example (read from json file)
### input JSON file name is 'example.json'
### output YAML file name is 'output.yaml'

```plaintext

const { jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

// Convert JSON to YAML and save to output.yaml
const yamlString = convertJsonFileToYaml('./example.json', './output.yaml');

if (yamlString) {
  console.log('YAML content:');
  console.log(yamlString);
}
```

### Example 2 
### input JSON file name is 'sample1.json'
### output YAML file name is 'output1.yaml'
```plaintext

const { jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

const yamlString = convertJsonFileToYaml('./sample1.json', 'output1.yaml');

if (yamlString) {
  console.log(yamlString);
}
```

### Example 3
### input JSON file name is 'sample2.json'
### output YAML file name is 'output2.yaml'
```plaintext

const {jsonToYaml, convertJsonFileToYaml } = require('json-to-yaml-converter');

const yamlString = convertJsonFileToYaml('./sample2.json', 'output2.yaml');

if (yamlString) {
  console.log(yamlString);
}

```


### Add a License

Create a `LICENSE` file to specify the licensing of your package. Here is an example using the MIT License:

```markdown
MIT License


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so

...
