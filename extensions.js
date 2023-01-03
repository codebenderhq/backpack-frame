import websocket_midleware from './backpack-std/websocket.js'
import script_middleware from './frame-starter/backpack-std/script.js'
import asset_middlware from './frame-starter/backpack-std/asset.js'
import api_middleware from './frame-starter/backpack-std/api.js'
import html_middleware from './frame-starter/backpack-std/html.js'

let response

const extension_server = {
    hasResp: false,
    response: null,
    pathname: null,
    req: null,
    async run (middleware) {
        let _resp = await middleware(this.pathname, this.req) 

        if(_resp && !this.hasResp){
            this.hasResp = true
            this.response = _resp
        }
        return this
    }
}

export const run_extensions = async(pathname, request) => {

    extension_server.pathname = pathname
    extension_server.req = request
    extension_server.hasResp = false

    response = await extension_server
    .run(websocket_midleware)
    .then(res => res.run(script_middleware))
    .then(res => res.run(asset_middlware))
    .then(res => res.run(api_middleware))
    .catch(err => console.log(err))

    // default script
    if(!response.response){
       response.response =  await html_middleware(pathname, request) 
    }


    return response.response
}