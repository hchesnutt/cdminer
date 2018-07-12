# cdminer

Company Data Miner is a pretty quick and light command-line data explorer for json files that can be loaded into memory.

## Assumptions
cdminer was developed with the following assumptions:
- JSON file provided by user can fit in memory
- JSON file is an array of objects
- Each object looks like the company schema example

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- cdminer is currently only supported on UNIX based systems.


### Installing

A step by step series of examples that tell you how to get a development env running

Clone or download repository onto your local computer

```shell
git clone https://github.com/hchesnutt/cdminer
```
Navigate to root
```shell
$ cd ./cdminer
```
install package globally
```shell
$ npm install -g
```
Download example data
```shell
$ curl https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json > data.json
```
You're set!
```shell
$ cdminer ./data.json locate 'CA'
```
## API
```shell
cdminer <path> <query> <param>
```
### <path>
Relative path to json file.

### <query>
Can be one of the following:
#### locate
Finds the list of companies by Location (state only).

Example:
```shell
$ cdminer locate CA
```

#### find_before
Finds the list of companies before a specific year. This is an inclusive
operation. Must be an integer.

`<param>` options:
Must be an integer.

Example:
```shell
$ cdminer find_before 1999
```

#### find_after
Finds the list of companies after a specific year. This is an inclusive
operation.

`<param>` options:
Must be an integer.

Example:
```shell
$ cdminer find_after 2000
```

#### find_companies_between_size
Finds the list of companies based on the number of full time employees.
Does not include companies with N/A or NA as value for full_time_employees.

`<param>` options:
Possible values ['1-10', '11-50', '51-200', '201-500', '501-1,000',
'1,001-5,000', '5,001-10,000', '10,001+'].

Example:
```shell
$ cdminer find_companies_between_size 1,001-5,000
```

find_type
Finds all companies by Company Category.

`<param>` options:
Possible values [’N/A’,
'Aerospace and Defense',
'Business & Legal Services',
'Data/Technology',
'Education',
'Energy',
'Environment & Weather',
'Finance & Investment',
'Food & Agriculture',
'Geospatial/Mapping',
'Governance',
'Healthcare',
'Housing/Real Estate',
'Insurance',
'Lifestyle & Consumer',
'Media',
'Research & Consulting',
'Scientific Research',
'Transportation']

Example:
```shell
$ cdminer find_type Data/Technology'
```

### `<param>`
See <query> for param options.

## Running the tests

Run `npm test` in your favorite shell from the project root directory.

## Next Steps
1. Support query chaining `cdminer locate CA find_type Media`
2. Refactor cdminer signature to support --data or --url flags as data source
  -`cdminer <query> <param> [-d --data <path>] [-u --url <remotepath>]
1. Support large datasets and increase performance when making multiple queries
  - Implement local Elasticsearch instance
  - Refactor executable to start background daemon process
  - Refactor manual query handlers to Elasticsearch logic
  - Add checksum of file as Elasticsearch index, if file has aleady been added, don't need to add again.
  - Batch import json file into Elasticsearch
2. Support concurrent users across organization
  - Deploy as dockerized service on AWS EC2 instance
  - Expose endpoint and issue keys to users

## Built With

* [Node.js](https://nodejs.org/en/)
* [GitHub - chalk/chalk: 🖍 Terminal string styling done right](https://github.com/chalk/chalk)
* [figlet - npm](https://www.npmjs.com/package/figlet)


## Author

* **Henry Chesnutt** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* GitHub user andrei-m for his Levenshtein distance algorithm
* Mother


### Testing
how to run tests

npm install -g

cdminer <path> <query> <>