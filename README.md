# cdminer

Company Data Miner is a quick and light command-line data explorer for company data JSON files that can be loaded into memory.

## Assumptions
cdminer was developed with the following assumptions:
- JSON file can fit in memory
- JSON file is an array of company objects
- Each object looks like the company schema example below
```json
{
  "company_name": "3 Round Stones, Inc.",
  "year_founded": 2010,
  "state": "DC",
  "full_time_employees": "1-10",
  "company_category": "Data/Technology"
}
```

## Installing

### Prerequisites

- cdminer is currently only supported on UNIX based systems.
- Node.js^10.0.0
- npm^5.6.0

### Instructions

A step by step series of examples that tell you how to get this tool up and running on your local machine.

1. Clone or download repository onto your local computer
```shell
git clone https://github.com/hchesnutt/cdminer
```

2. Navigate to root
```shell
$ cd ./cdminer
```

3. install package globally
```shell
$ npm install -g
```

4. Download example data
```shell
$ curl https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json > data.json
```

5. You're set!
```shell
$ cdminer ./data.json locate 'CA'
```
## API
```shell
cdminer <path> <query> <param>
```
### `<path>`
Relative path to json file.

### `<query>`
cdminer will suggest most similar query in case of misspell based on Levenshtein distance. Query can be one of the following:
#### **locate**
  - Finds the list of companies by state location. 
`<param>` must be a state acronym and is case sensitive.
```shell
$ cdminer ./data.json locate CA
```

#### **find_before**
  - Finds the list of companies before a specific year. This is an inclusive operation. must be an integer.

`<param>` must be an integer.
```shell
$ cdminer ./data.json find_before 1999
```

#### **find_after**
  - Finds the list of companies after a specific year. This is an inclusive
operation.

`<param>` must be an integer.
```shell
$ cdminer ./data.json find_after 2000
```

#### **find_companies_between_size**
  - Finds the list of companies based on the number of full time employees.
Does not include companies with N/A or NA as value for full_time_employees.

`<param>` must be exact match, don't forget the commas! Possible values: `['1-10', '11-50', '51-200', '201-500', '501-1,000','1,001-5,000', '5,001-10,000', '10,001+']`
```shell
$ cdminer ./data.json find_companies_between_size 1,001-5,000
```

#### **find_type**
  - Finds all companies by company category.

`<param>` must be exact match. Possible values: `[’N/A’, 'Aerospace and Defense', 'Business & Legal Services', 'Data/Technology', 'Education', 'Energy', 'Environment & Weather', 'Finance & Investment', 'Food & Agriculture', 'Geospatial/Mapping', 'Governance', 'Healthcare', 'Housing/Real Estate', 'Insurance', 'Lifestyle & Consumer', 'Media', 'Research & Consulting', 'Scientific Research', 'Transportation']`
```shell
$ cdminer ./data.json find_type Data/Technology'
```

### `<param>`
See `<query>` for param options.

## Running tests

In your favorite shell, navigate to the root directory and run `npm test`.

## Next Steps
1. Support query chaining `cdminer locate CA find_type Media`
2. Refactor cdminer signature to support --data or --url flags as data source
  -`cdminer <query> <param> [-d --data <path>] [-u --url <remotepath>]
3. Support large datasets and increase performance when making multiple queries
  - Implement local Elasticsearch instance
  - Refactor executable to start background daemon process
  - Refactor manual query handlers to Elasticsearch logic
  - Add checksum of file as Elasticsearch index, if file has aleady been added, don't need to add again.
  - Batch import json file into Elasticsearch
4. Support concurrent users across organization
  - Deploy as dockerized service on AWS EC2 instance
  - Expose endpoint and issue keys to users

## Reflections
  - Early in the challenge I opted to write my own `stdin` arguments parser. If I were to repeat this excercise I would use a library for a more robust implementation. This would allow for faster feature development in the future since multiple inputs and flags would be parsed appropriately.

  - I regret that I wasn't able to support Windows operability. Curious how that would work...

## Built With

* [Node.js](https://nodejs.org/en/)
* [GitHub - chalk/chalk: 🖍 Terminal string styling done right](https://github.com/chalk/chalk)
* [figlet - npm](https://www.npmjs.com/package/figlet)

## Author

* **Henry Chesnutt**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* GitHub user andrei-m for his Levenshtein distance algorithm implementation
* Mother
