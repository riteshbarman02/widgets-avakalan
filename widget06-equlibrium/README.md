# Equllibrium 
this project shows the value of reaction force on changing the position and value of load . 

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project utilizes the Two.js library to create an interactive graph that visualizes bending moments and shear forces. The graph consists of multiple components, including rectangles and lines, with the ability to adjust parameters using sliders.

## Installation

To run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/riteshbarman02/widgets-avakalan/tree/master/widget06-equlibrium
    ```

2. Open the project folder.

3. Open with VScode.

4. Open 'index.html' from the folder.

5. start the live server by clicking on go live .

## Usage

Once the project is set up, you can interact with the graph using the provided sliders. There are multiple sliders available, each controlling specific parameters of the graph. Adjust the sliders to observe changes in the graph in real-time.

## Features

- **Interactive Graph**: Utilizes the Two.js library to create an interactive graph with bending moments, shear forces, and other components.
- **Multiple Sliders**: Includes multiple sliders for adjusting various parameters of the graph, such as poisson's ratio and load.
- **Real-time Updates**: Changes made through sliders are reflected in real-time on the graph, providing immediate feedback to users.
- **Responsive Design**: The graph is designed to adapt to different screen sizes, ensuring a consistent user experience across devices.

## Variables

- **`ob2` (DOM element):**
   - Represents the DOM element with the id "canvas_1".
   - Obtained using `document.getElementById("canvas_1")`.

- **`ax, bx, by, ay` (Numeric values):**
   - Coordinates defining the rectangle's vertices and arrow positions.

- **`arrowX` (Numeric value):**
   - Horizontal position of the arrow's center.

- **`two` (Two.js instance):**
   - Represents the Two.js drawing context.
   - Created with a specified width and height and appended to the DOM element `ob2`.

- **`points1, points2` (Arrays of `Two.Anchor` objects):**
   - Represent the vertices of graphical elements.
   - Used to define the shapes of the rectangles.

- **`graph1, graph2` (Instances of `Graph` class):**
   - Represent graphs or paths on the canvas.
   - Created using the `Graph` class, which presumably defines graphical elements.

- **`R1txt, R1val, R2txt, R2val, ptxt, L` (Two.js `Text` objects):**
   - Text elements displaying information on forces, lengths, and labels.
   - Created to display calculated values and labels on the canvas.

- **`p, Pval` (HTML elements):**
   - Input element representing the force value.
   - Used to control and obtain the force value.

- **`larrow1, larrow2, line, ltext, Xtext` (Instances of `eigenLine` class and `Two.Text` objects):**
   - Represent arrows and labels indicating lengths.
   - Created to visually represent lengths and positions on the canvas.

- **`length` (HTML element):**
   - Slider input element representing the length value.
   - Used to control the length of the rectangles.

## Functions

### `length.oninput`
- **Description:**
  - Event handler for the input event on the `length` slider.
  - Updates the position and length of the rectangles and calculates forces based on the slider value.
  - Also updates the position and text of the arrows and labels based on the slider value.


## Contributing

Contributions to the project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. Follow the provided contribution guidelines to contribute effectively.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
