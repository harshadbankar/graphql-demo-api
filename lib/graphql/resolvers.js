module.exports = {
    Query: {
        project(_, {key}, ctx) {
            return {key: key};
        }
    },
    Project: {
        builds(project, _, ctx) {
            return [{
                name: project.key.concat('-build-demo'),
                state: 'failed',
                number: 1
            }]
        },
        repository(project, _, ctx) {
            return {
                name: project.key.concat('_API_DEMO'),
                public: !project.key
            }
        }
    }
}