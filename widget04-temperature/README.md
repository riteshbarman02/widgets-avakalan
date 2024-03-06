# effect on stress by temperature
this project shows how stress and elongation of rod  daviates on increasing and decreasing of temperature 

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
    git clone https://github.com/riteshbarman02/widgets-avakalan/tree/master/widget04-temperature
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

- **`slider_y1, slider_y2` (Numeric values):**
   - Initial values for the y-coordinates of sliders.

- **`ax, bx, by, ay` (Numeric values):**
   - Coordinates defining the rectangle's vertices.

- **`two` (Two.js instance):**
   - Represents the Two.js drawing context.
   - Created with a specified width and height and appended to the DOM element `ob2`.

- **`points1` (Array of `Two.Anchor` objects):**
   - Represents the vertices of the rectangle.
   - Used to define the shape of the rectangle.

- **`rect` (Two.js `Rectangle` objects):**
   - Represents the black rectangles on both sides of the rectangle.
   - Created using the `makeRectangle` method of the Two.js library.

- **`graph1` (Instance of `Graph` class):**
   - Represents the rectangle graph.
   - Created using the `Graph` class, which presumably defines graphical elements.

- **`lineForl` (Instance of `eigenLine` class):**
   - Represents a line indicating the length of the rectangle.
   - Created using the `eigenLine` class, possibly a custom class defined in "line.js".

- **`ltext1, eText` (Two.js `Text` objects):**
   - Text elements displaying information about the rectangle's dimensions and stress.

- **`alphaInput, alpha, eInput, e` (HTML elements and Numeric values):**
   - Input fields and variables representing the coefficient of thermal expansion and Young's modulus, respectively.

## Functions

### `delt.oninput`
- **Description:**
  - Event handler for the input event on the `delt` slider.
  - Updates the position of the rectangle and calculates stress based on slider values.
  
### `alphaInput.addEventListener` and `eInput.addEventListener`
- **Description:**
  - Event listeners for input changes in the `alphaInput` and `eInput` fields.
  - Updates the values of `alpha` and `e` respectively when the input values change.

### `load.oninput`
- **Description:**
  - Event handler for the input event on the `load` slider.
  - Updates the position of the black rectangles representing load on the rectangle.

### `two.makeText`
- **Description:**
  - Creates a text element in the Two.js scene with the specified text content and position.

### `two.update`
- **Description:**
  - Updates the Two.js renderer to reflect any changes made to the scene.



## Contributing

Contributions to the project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. Follow the provided contribution guidelines to contribute effectively.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
