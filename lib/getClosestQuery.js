const getEditDistance = require('./levenshtein.js');

const queries = ['locate', 'find_before', 'find_after', 'find_companies_between_size', 'find_type'];

const getClosestQuery = (input) => {
  let minDist, dist, closestQuery;
  for (let query of queries) {
    dist = getEditDistance(input, query);
    if (!minDist){
      minDist = dist;
    }
    if (dist < minDist) {
      minDist = dist;
      closestQuery = query;
    }
  };
  return closestQuery;
};

module.exports = getClosestQuery;
