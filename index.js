/**
 * The MIT License (MIT)
 *
 * Copyright © 2021 Abdelrahman Said
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the “Software”), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const fontSlider = document.querySelector("#font-size");
const sizeDisplay = document.querySelector("#fs-view");

updateSizeDisplay(fontSlider.value);

const headlineInput = document.querySelector("#headline-input");
const headlineView = document.querySelector("#headline-view");

updateHeadlineFontSize(fontSlider.value);

fontSlider.addEventListener("input", updateSize);
headlineInput.addEventListener("input", updateHeadline);

function updateSize(event) {
    const size = event.target.value;

    updateSizeDisplay(size);

    updateHeadlineFontSize(size);
}

function updateSizeDisplay(size) {
    sizeDisplay.textContent = size * 2;
}

function updateHeadlineFontSize(size) {
    headlineView.style.fontSize = `${size}px`;
}

function updateHeadline(event) {
    headlineView.textContent = event.target.value;
}
