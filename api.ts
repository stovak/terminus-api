
import { api } from "@airtasker/spot";


/**
 * API Pieces:
 */

import "./api-contract/Auth";
import "./api-contract/Site";
import "./api-contract/Users";

@api({
    name: "terminus-api",
    version: "0.0.1"
})
class Api {}


