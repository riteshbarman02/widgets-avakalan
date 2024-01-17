
# Poisson's Ratio Visualization

This project demonstrates a simple visualization of Poisson's Ratio using Two.js. Poisson's Ratio is a measure of the deformation in materials when subjected to stress. The project provides interactive sliders to adjust parameters and visualize the effects on a graphical representation.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Logic](#javascript-logic)
- [License](#license)

## Overview

This project uses HTML, CSS, and JavaScript to create an interactive webpage that allows users to explore the concept of Poisson's Ratio. Two.js is utilized for graphical rendering, and sliders are provided to adjust material properties.

## Prerequisites

- Web browser with JavaScript enabled.
- Internet connection to load external libraries (Two.js).

## Installation

1. Clone or download the project repository.
2. Open the `index.html` file in a web browser.

## Usage

1. Open the webpage in a web browser.
2. Adjust the sliders to modify the material properties (μ and P).
3. Observe the graphical representation to visualize the effects of Poisson's Ratio.

## HTML Structure

The `index.html` file defines the structure of the webpage, including the title, stylesheet link, viewport configuration, and script reference. The content is organized into a container with sliders for user interaction.

## CSS Styling

The `main.css` file provides styles for the webpage, including container styles, canvas styles, input styles, and responsive design for different screen sizes.

## JavaScript Logic

The `main.js` file contains the logic for the project. Key functionalities include:

## Variables

### `ob2`
Represents the HTML element with the ID "canvas_1".

### `slider_y1`, `slider_y2`
Constants representing slider y-coordinates.

### `ax`, `bx`, `by`, `ay`
Define initial coordinates for the lines.

### `two`
Two.js instance for rendering graphics.

### `domian`
An instance of the `eigenLine` class representing a line with perpendicular bar ends using Two.js.

### `points1`
An array of Two.js `Anchor` points defining the vertices of a shape.

### `graph1`
An instance of the `Graph` class used to create a graph based on the given points.

### `statement`
A Two.js text element displaying a statement about Poisson's ratio variations.

### `mue`, `load`
HTML input elements for sliders.

### `mueval`, `loadval`
Variables to store slider values.

### `initialValue`
Initial value for sliders.

## Functions

### Slider Functionality

#### `mue.oninput`
Event listener for the `mue` slider. Updates `mueval` and `loadval` based on user input and triggers a Two.js update.

#### `load.oninput`
Event listener for the `load` slider. Updates points based on slider values, adjusting the position of the shape dynamically.

---

Feel free to adjust the level of detail and add more information as needed for your documentation. This Markdown document provides a brief overview of the variables and functions in our JavaScript code.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and contribute to enhance the understanding of Poisson's Ratio through this visualization.

Avakalan Widgets - Poisson's Ratio Visualization<br><br>



This repository contains code for visualizing the effect of Poisson's ratio on a material using Two.js. The visualization includes a graph with a line and perpendicular bar ends, which can be adjusted using sliders for Poisson's ratio (μ) and load (P).<br>

How to Use<br><br>
Clone the repository to your local machine:<br>
git clone https://github.com/riteshbarman02/widgets-avakalan.git<br>
Open the index.html file in your web browser.<br><br>

Adjust the sliders for Poisson's ratio and load to observe the real-time changes in the visualization.<br><br>

Features<br>
Adjustable sliders for Poisson's ratio (μ) and load (P).<br>
Real-time visualization of the material's response to varying Poisson's ratio and load.<br>
Code Structure<br><br>
index.html: HTML file containing the structure of the webpage.<br>
main.css: CSS file for styling the webpage, including responsive design for smaller screens.<br>
main.js: JavaScript file using Two.js for creating the visualization and handling slider interactions.<br>
js/line.js: JavaScript file defining a custom line class for use in the visualization.<br>
js/graph.js: JavaScript file defining a class for creating and updating the graph.<br>
Responsive Design<br>
The webpage is designed to be responsive, adjusting the layout and styling for different screen sizes, with a special focus on smaller screens (less than 600px width).<br><br>

@media (max-width: 600px) {<br>
    /* Mobile-friendly styles go here */<br>
    .myCanvas {<br>
        width: 100%;<br>
        height: 100%;<br>
    }<br>
    /* Additional styles for smaller screens */<br>
}<br><br>
Contributing<br>
Feel free to fork the repository, make changes, and create pull requests. Contributions are welcome!<br>

License<br>
This code is licensed under the MIT License. Feel free to use it for commercial purposes.<br>

If you have any questions or suggestions, please open an issue in the repository.<br>

Enjoy visualizing Poisson's ratio with Avakalan Widgets!<br
