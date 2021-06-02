import {
    body, endpoint, request, response, headers,
    String, Integer, Int32, Int64, Number, Float, Double, Date, DateTime, pathParams
} from "@airtasker/spot";

/**
 * Site Info
 */
@endpoint({
    method: "GET",
    path: "/api/sites/:site_id"
})
export class Site {
    @request
    request(
        @headers
            headers: {
            /** The authorization token */
            Authorization: String;
        },
        @pathParams
        pathParams: {
            site_id: String,
        }
    ) {}

    @response({ status: 200 })
    successfulResponse(
        @body body: SiteInfoResponse
    ) {}
}

export interface SiteInfoResponse {

}

/**
 * Site Names
 */
@endpoint({
    method: "GET",
    path: "/api/site-names/:site_name",
    tags: ["Sites"]
})
export class SiteName {
    @request
    request(
        @headers
            headers: {
            /** The authorization token */
            Authorization: String;
        },
        @pathParams
        pathParams: {
            site_name: String
        }
    ){}
    @response({status: 200})
    successfulResponse(
        @body body: SiteNameResponse
    ){}
}

export interface SiteNameResponse {
    id: String;
    name: String;
}

/**
 * Site Environments
 */
@endpoint({
    method: "GET",
    path: "/api/sites/:site_id/environments/:env_id",
    tags: ["Sites", "Environments"]
})
export class SiteEnvironments {
    @request
    request(
        @headers
            headers: {
            /** The authorization token */
            Authorization: String;
        },
        @pathParams
        pathParams: {
            site_id: String,
            env_id: String,
        }
    ){}
    @response({status: 200})
    successfulResponse(
        @body body: SiteEnvironmentResponse
    ){}
}

export interface SiteEnvironmentResponse {

}


/**
 * Site Workflows
 */
@endpoint({
    method: "GET",
    path: "/api/sites/:site_id/workflows",
    tags: ["Sites", "Workflows"]
})
export class SiteWorkflows {
    @request
    request(
        @headers
            headers: {
            /** The authorization token */
            Authorization: String;
        },
        @pathParams
        pathParams: {
            site_id: String,
        }
    ){}
    @response({status: 200})
    successfulResponse(
        @body body: SiteWorkflowResponse
    ){}
}

export interface SiteWorkflowResponse {

}
