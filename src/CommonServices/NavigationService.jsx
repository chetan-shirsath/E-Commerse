

const basePath = "/e-commerse";
export default function navigateToUrl(history, path) {
    if(path === "")
        history.push(basePath);
    else
    history.push(basePath+path);
}