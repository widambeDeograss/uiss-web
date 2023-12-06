import {BaseUrl} from "./BaseUrl.ts";

export const EventManagement = {
    Events : BaseUrl + "/api/events",
}

export const ProjectManagement = {
    project : BaseUrl + "/api/projects"
}

export const testRoute = {
    test : BaseUrl + "/api/test"
}

export const ClubsManagement = {
    clubs: BaseUrl + "/api/clubs"
}

export const Gallarey = {
    gallarey : BaseUrl + "/api/gallery/albums",
    images : BaseUrl + "/api/gallery/images/"
}

export const userManagement = { 
    userLogin : BaseUrl + "/api/login",
    userRegister : BaseUrl + "/api/register",
    userLogout : BaseUrl + "/api/logout",
    user:BaseUrl + "/api/users"
}