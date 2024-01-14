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

@media (max-width: 600px) {
    /* Mobile-friendly styles go here */
    .myCanvas {
        width: 100%;
        height: 100%;
    }
    /* Additional styles for smaller screens */
}
Contributing<br>
Feel free to fork the repository, make changes, and create pull requests. Contributions are welcome!<br>

License<br>
This code is licensed under the MIT License. Feel free to use it for commercial purposes.<br>

If you have any questions or suggestions, please open an issue in the repository.<br>

Enjoy visualizing Poisson's ratio with Avakalan Widgets!<br>





