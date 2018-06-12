import $ from "jquery";

export function addHeader(text) {
    $("#root").append(`<h1>${text}</h1>`);
}

export function addAParagraph(text) {
    $("#root").append(`<p>${text}</p>`)
}