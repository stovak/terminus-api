import {
    body, endpoint, request, response, headers,
    String, Integer, Int32, Int64, Number, Float, Double, Date, DateTime, queryParams, pathParams
} from "@airtasker/spot";

@endpoint({
    method: "GET",
    path: "/api/users/:user_id",
    tags: ["Users"]
})
export class User {
    @request
    request(
        @headers headers: {
            /** The authorization token */
            Authorization: String;
            Accept: String;
        },
        @pathParams pathParams: {
            user_id: string,
        },
    ) {}

    @response({ status: 200 })
    successfulResponse(
        @body body: UserInfoResponse
    ) {}
}

export interface UserProfileResponse {
    invites_to_nonuser: Integer;
    devsites: Integer;
    registration_context: null|String;
    full_name: String;
    pullFromLive: boolean;
    initial_identity_strategy: null|String,
    tracking_first_site_create: Int64;
    tracking_first_code_push: Int64;
    opt_in_new_dashboard: boolean;
    job_function: String;
    tracking_first_workflow_in_live: Int64;
    tracking_first_team_invite: Int64;
    firstname: String;
    invites_to_site: Integer;
    lastname: String;
    copyCodeUpdatePhp: boolean;
    google_adwords_pushed_code_sent: Int64;
    web_services_business: boolean;
    initial_identity_name: null|String;
    copyCodeClearCache: boolean;
    guilty_of_abuse: null|String;
    invites_sent: Integer;
    minimize_jit_docs: boolean;
    modified: Int64;
    activity_level: String;
    maxdevsites: Integer;
    organization: String;
}

export interface UserInfoResponse {
    profile: UserProfileResponse;
    user_id: String;
    auth0_user_id: String;
    created_at: Int64;
    email: String;
}

@endpoint({
    method: "GET",
    path: "/api/users/:user_id/memberships/sites",
    tags: ["Users"]
})

export class UserMembershipSites {
    @request
    request(
        @headers headers: {
            /** The authorization token */
            Authorization: String;
            Accept: String;
        },
        @pathParams pathParams: {
            user_id: String,
        }
    ) {}
    @response({ status: 200 })
    successfulResponse(
        @body body: UserMembershipSiteResponse
    ) {}
}

interface UserMembershipSiteResponse {

}

@endpoint({
    method: "GET",
    path: "/api/users/:user_id/workflows",
    tags: ["Users", "Workflows"]
})

export class UserWorkflows {
    @request
    request(
        @headers headers: {
            /** The authorization token */
            Authorization: String;
            Accept: String;
        },
        @pathParams pathParams: {
            user_id: String,
        }
    ) {}
    @response({ status: 200 })
    successfulResponse(
        @body body: UserWorkflowResponse
    ) {}
}

interface UserWorkflowResponse {

}
