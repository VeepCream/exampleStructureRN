import Config from "react-native-config";

import { httpClient } from './HttpAPI'
import { promiseGetRecoil } from "recoil-outside"
import tokenStore from '../stores/tokenStore';

export const endpoint = {
    "test": { baseURL: Config.URL_API, url: "test", method: "POST", new: true },
    "uploadimage": { baseURL: Config.URL_API, url: "uploadimage", method: "POST", noToken: true, uploadImg: true },
    "postTest": { baseURL: Config.URL_API, url: `test/post/:id`, method: "POST", paths: ["id"] },
}

async function API(name, opt) {
    const requireEndpoint = endpoint[name]
    let config = {}
    //console.log("requireEndpoint",requireEndpoint);

    const header = await getHeader(requireEndpoint)

    config = {
        method: requireEndpoint.method,
        baseURL: requireEndpoint.baseURL,
        redirect: true,
        url: setURLApi(requireEndpoint, opt),
        headers: header,
        data: opt?.data || null
    }
    if (requireEndpoint.method === "GET") {
        config["params"] = opt?.params
    }

    if (requireEndpoint.uploadImg) {
        return await httpClient.post(requireEndpoint.url, opt.data, {
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`
            }
        })
    }
    else {
        return await httpClient(config);
    }

}

async function getHeader(requireEndpoint) {

    let header = {
        "Content-Type": "application/json",
    }

    try {

        let jwt = null
        if (!requireEndpoint.noToken) {
            jwt = await promiseGetRecoil(tokenStore)
        }

        if (!requireEndpoint.noToken && jwt) {
            header['Authorization'] = jwt
        }

    }
    catch (err) {

    }

    return header
}

function setURLApi(requireEndpoint, opt) {
    let url = requireEndpoint.url
    if (opt?.path) {
        requireEndpoint.paths.forEach((v, i) => {
            url = url.replace(":" + v, opt?.path[v]);
        })
    }

    return url
}

export default API