export interface AddressType {
    street: string
    city: string
}

export interface UserType {
    id: string
    name: string
    email: string
    gender: string
    address: AddressType
    phone: string
}

export interface ArticleType {
    id: number,
    Icon: any
    title: string
    desc: string
}


export type RowType = {} & Omit<UserType, 'id'>