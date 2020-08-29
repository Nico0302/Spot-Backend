const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });

async function searchSchools(query) {
    const { body } = await client.search({
        index: 'spot-school',
        body: {
            query: {
                multi_match: {
                    query,
                    fields: ['name', 'city', 'acronym']
                }
            }
        }
    });

    return body.hits.hits.map(hit => hit._source);
}

module.exports = {
    searchSchools
};