

export interface IPerson {
    firstName: string,
    lastName: string,
    fullName: string,
    identifier: string,
    fullIdentifier: string,
    email: string,
    typeIdentifier: string
}

export interface IPersonCreate {
    first_name: string,
    last_name: string,
    identifier: string,
    email: string,
    type_identifier: string,
  
}