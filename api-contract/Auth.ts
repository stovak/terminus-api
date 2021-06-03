import {
    body, endpoint, request, response,
    String, Integer, Int32, Int64, Number, Float, Double, Date, DateTime, headers
} from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/api/authorize/machine-token"
})
export class Auth {
    @request
    request(
        @headers headers: {
            Accept: "string"
        },
        @body body: AuthMachineToken
    ) {}

    @response({ status: 200 })
    successfulResponse(
        @body body: Session
    ) {}
}

export interface AuthMachineToken {
    machine_token: String;
    client: String;
}

export interface Session {
    session: String;
    expires_at: Int64;
    user_id: String;
}
