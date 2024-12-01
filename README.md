# Data Visualization Project

## Data

The data I propose to visualize for my project is [Olympic Sports and Medals 1896-2014](https://www.kaggle.com/datasets/the-guardian/olympic-games)



## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Do host countries of the Olympic Games experience an economic boost, and does that correlate with their performance in the Games?
 * How does a country's GDP or economic size correlate with the number of Olympic medals won?
 * Which countries have won the most gold medals over time?
 * What is the geographic distribution of Olympic medals in the Summer and Winter Games?

## Sketches


![Frame](https://github.com/user-attachments/assets/53084871-9e1a-48ae-ba7f-733c15c51409)
A pie chart illustrating the share of gold medals won by various countries, with countries like the USA and USSR leading the chart.
![Slide 16_9 - 4](https://github.com/user-attachments/assets/73d613dd-9f9f-40a6-9370-94e5ba1e33b3)
A bar chart depicting the number of medals won in various sports such as swimming, boxing, and cycling
![Sports (1)](https://github.com/user-attachments/assets/c5419f43-5a40-43b1-ba08-7b51b2d7da6e)
A line graph showing the trend of Olympic medals won by a specific country (likely the USA) over the years, combined with a world map.
![Sports](https://github.com/user-attachments/assets/90b11696-b804-451c-b951-c8075bc3cd66)
A bar chart displaying the number of basketball medals won by different countries, including the USA, USSR, and Yugoslavia.


## Prototypes

![Home Page](https://github.com/user-attachments/assets/c1a5df01-4426-4144-bacb-e50b706d793a)
This will be the Home Page. It's a proof of concept home page of a world map showing the distribution of Olympic medals by country, differentiated by size and highlighting summer and winter games.



## Open Questions


I have some uncertainty about the feasibility of implementing the sketched system. One concern is sourcing geographic shape files, like shapefiles or GeoJSON, for accurate medal distribution maps. Additionally, resolving country codes to meaningful names, especially for outdated or former countries, could be challenging. Integrating economic data like GDP or sports spending is also a concern, as finding reliable data and merging it with the Olympic dataset might be difficult.

## Milestones

#### Week 1

- Set up the initial project structure and integrated the Summer Olympics dataset as a JSON array.

- Built the foundation for the Home Page, including a world map visualization using D3.js to display the geographic distribution of Olympic medals.

- Added functionality to toggle between Summer and Winter Games on the Home Page.

<img width="1512" alt="Screenshot 2024-11-28 at 6 21 42 PM" src="https://github.com/user-attachments/assets/c34ac372-b79c-4a3f-b8d8-87fc7b144f5a">


#### Week 2

- Implemented a pie chart visualization to show the share of gold medals won by top countries.

- Styled the pie chart with dynamic color scales based on the selected medal type (gold, silver, or bronze).

- Added interactivity with tooltips displaying medal counts and country names on hover.

- Created a dynamic legend component for the pie chart to match the visualization.

<img width="1508" alt="Screenshot 2024-11-28 at 6 23 05 PM" src="https://github.com/user-attachments/assets/115457bb-7ac5-4acc-bac5-cb44c77864f3">

#### Week 3

- Developed a line chart to show the trend of medals won by a selected country over time.

- Integrated the line chart with the country selection dropdown, ensuring synchronization with other visualizations.

- Styled axes and labels for readability and ensured responsiveness.

- Enhanced the interactivity of the pie chart with hover effects.

<img width="1506" alt="Screenshot 2024-11-28 at 6 22 45 PM" src="https://github.com/user-attachments/assets/9046b0ff-83a8-43ed-b420-079927924c49">

#### Week 4

- Broke the line chart into 3 different categories - Gold, Silver and Bronze
  
- Created a vertical medal selection component for the line chart with 3 respective icons

- Added an interaction to the vertical medal selectors component that highlights the gold, silver and bronze medal respectively.


<img width="1506" alt="Screenshot 2024-11-28 at 6 22 45 PM" src="https://github.com/user-attachments/assets/9046b0ff-83a8-43ed-b420-079927924c49">

#### Week 5

- Created a Material-UI dropdown picker for country selection, dynamically populated with country data.

- Developed a bar chart using D3.js to display the number of medals won by a selected country across different sports.

- Integrated the dropdown with the bar chart, ensuring dynamic updates based on the selected country.

- Ensured the dropdown defaults to "United States" on initial load.
  
<img width="1511" alt="Screenshot 2024-11-28 at 6 23 17 PM" src="https://github.com/user-attachments/assets/cc6dd990-3886-49f4-9f4b-d708407f63d7">


## Website Link
https://incomparable-salmiakki-49a475.netlify.app
