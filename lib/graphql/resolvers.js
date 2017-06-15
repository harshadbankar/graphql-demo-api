module.exports = {
    Query: {
        project(_, {key}, ctx) {
            return {key: key};
        }
    },
    Project: {
        builds(project, _, ctx) {
            return [{
                name: project.key.concat('-build'),
                state: 'failed',
                number: 1
            }]
        },
        repository(project, _, ctx) {
            return {
                name: 'sample',
                public: true
            }
        }
    }
}