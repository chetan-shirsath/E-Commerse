
const basePath = "/e-commerse";
export default function navigateToUrl(history, path) {
    if(path === "")
        history.push(basePath);
    else
    history.push(basePath+path);
}

// export function navigateToUrlParams(history, path, state) {
//     console.log("ike " +state);
//     history.push(basePath+path, [state]);
// }