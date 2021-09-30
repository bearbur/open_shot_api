
const openShotConfigs = {
    endpoints: {
        projects: {
            url: 'projects'
        }
    },
    proxy: {
      host: '127.0.0.1',
      port: 8080
    },
    server:{
        host: 'http://20.113.56.63',
        port: 80,
        login: 'test',
        password: 'test'
    },
    demoServer: {
        host: 'http://cloud.openshot.org',
        port: 80,
        login: 'demo-cloud',
        password: 'demo-password'
    }
}

export default openShotConfigs;
