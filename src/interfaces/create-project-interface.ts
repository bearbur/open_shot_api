export interface CreateProjectInterface {
    auth: {
        username: string,
        password: string
    },
    headers: {
        ['Content-Type']: string,
        ['Access-Control-Allow-Origin']: string
    },
    data: {
        name: string,
        width: number,
        height: number,
        fps_num: number,
        fps_den: number,
        sample_rate: number,
        channels: number,
        json: object
    }
}

export interface ResponseOnCreateProjectInterface {
    data: object
}
