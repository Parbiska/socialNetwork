export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserType = {
    id: number
    status: string
    name: string
    photos: PhotosType
    followed: boolean
    location: { city: string, country: string }
}

export type DialogType = {
    id: number
    name: string
    img: string
}
export type MessageType = {
    id: number
    message: string
    img: string
    name: string
}