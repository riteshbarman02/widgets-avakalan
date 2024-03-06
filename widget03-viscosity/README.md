# Viscocity
this project shows how value of mue efffects the viscosity of a liquid

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
    git clone 
    ```

2. Open the project folder.

3. Optionally, serve the files using a local development server or simply open the `index.html` file in a web browser.

## Usage

Once the project is set up, you can interact with the graph using the provided sliders. There are multiple sliders available, each controlling specific parameters of the graph. Adjust the sliders to observe changes in the graph in real-time.

## Features

- **Interactive Graph**: Utilizes the Two.js library to create an interactive graph with bending moments, shear forces, and other components.
- **Multiple Sliders**: Includes multiple sliders for adjusting various parameters of the graph, such as poisson's ratio and load.
- **Real-time Updates**: Changes made through sliders are reflected in real-time on the graph, providing immediate feedback to users.
- **Responsive Design**: The graph is designed to adapt to different screen sizes, ensuring a consistent user experience across devices.

- # Functions
- ## `submit.onclick`

- **Description:**
  - Event handler for the click event on the submit button.
  - Initiates an animation sequence that gradually changes the position of certain graph elements based on the value of the mue slider.

- **Parameters:**
  - None

- **Functionality:**
  - Retrieves the value of the mue slider.
  - Calculates the total animation duration based on the slider value.
  - Defines an animation function that updates the positions of specific points, text elements, and a force vector gradually over the animation duration.
  - Updates the duration text element to display the progress of the animation.
  - Continues the animation until the progress reaches 1 (indicating completion).

- **Usage:**
  - Triggers when the user clicks the submit button to start the animation sequence.

## `animate(timestamp)`

- **Description:**
  - An animation function called recursively to update the graph elements gradually over time.
  
- **Parameters:**
  - `timestamp`: The current timestamp provided by the browser's animation frame request.

- **Functionality:**
  - Checks if it's the first frame of animation and sets the start time accordingly.
  - Calculates the elapsed time since the start of the animation.
  - Calculates the progress of the animation based on the elapsed time and total duration.
  - Updates the positions of specific graph elements based on the calculated progress.
  - Updates the duration text element to display the progress of the animation.
  - Requests the next frame of animation if the animation is not yet complete.

- **Usage:**
  - Called recursively within the `submit.onclick` event handler to update the graph elements over time.

## `two.makeText(text, x, y)`

- **Description:**
  - Creates a text element in the Two.js scene with the specified text content and position.

- **Parameters:**
  - `text`: The text content to be displayed.
  - `x`: The x-coordinate of the text element.
  - `y`: The y-coordinate of the text element.

- **Functionality:**
  - Creates a new Two.js text element with the specified content and position.
  - Sets the size and style of the text element.

- **Usage:**
  - Used to create various text elements on the graph, such as labels and annotations.

## `two.update()`

- **Description:**
  - Updates the Two.js renderer to reflect any changes made to the scene.

- **Parameters:**
  - None

- **Functionality:**
  - Triggers the rendering process to update the display based on any modifications to the scene.

- **Usage:**
  - Called after making changes to the graph elements to ensure they are reflected in the rendered output.


## Contributing

Contributions to the project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. Follow the provided contribution guidelines to contribute effectively.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
