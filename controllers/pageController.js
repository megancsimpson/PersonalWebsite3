import { getProjects } from "../models/projectModel.js";

function buildViewModel(activePage, pageTitle, extra = {}) {
    return {
        pageTitle,
        activePage,
        ...extra
    };
}

export function renderHome(req, res) {
    res.render("pages/home", buildViewModel("home", "Welcome to my portfolio"));
}

export function renderAbout(req, res) {
    res.render("pages/about", buildViewModel("about", "About Me"));
}

export function renderProjects(req, res) {
    res.render(
        "pages/projects",
        buildViewModel("projects", "Coding Projects", { projects: getProjects() })
    );
}