export interface PeopleRequest {
    message: string;
    success: boolean;
    result:  Result[];
}

export interface Result {
    id:              string;
    first_name:      string;
    last_name:       string;
    identifier:      string;
    email:           string;
    type_identifier: string;
    created_date:    string;
    full_name:       string,
    full_identifier: string
}