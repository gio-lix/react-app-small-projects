import React from "react";

export interface InfoType {
    title: string
    content: string
}


export interface ProductsType {

    id: number
    name: string
    slug: string
    photo: string
    price: number
    desc: string
    images: {src: string }[]
    colors: string[]
    infos: InfoType[]
    discount: number
    sold: number
    category: string
    brand: string
}


export type DragType = React.DragEvent<HTMLDivElement>