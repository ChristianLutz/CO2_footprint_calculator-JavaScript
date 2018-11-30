<h1>Personal Carbon Footprint Calculator</h1>
<p>This was my first group project, completed after eight weeks at CodeClan. My colleagues and I had four days to develop a full-stack project using JavaScript, Express, MongoDB, and the HighCharts API. The app asks users some questions about their lifestyle, eating, and travel habits, and then calculates their CO2 footprint based on their answers.</p>

<h2>Design & programming</h2>
<p>After a lot of research we decided that we can't find a universal formula for a user's CO2 footprint, so one member of the team took on the responsibility of coming up with a way to calculate it. We did the planning and wireframes as a team, and then used the MoSCoW method to set our priorities. We agreed that the best way to build this app was by using nested views, and once we knew what the project entailed, we broke it down into tasks, which we assigned and tracked via Trello.</p>

<p>My contribution to this project were the "Lifestyle" model and view, along with a randomiser that takes the user's score, checks which category has the most impact on their CO2 footprint, then displays recommendations that will help them reduce it.</p>

<h2>What I learned</h2>
<p>Working in a team has its challenges, but there are always constructive ways to approach them. If I had to do it all over again, I would spend more time planning and drawing up wireframes. I would have also liked to try mob programming for the main part of the project (the nested views), and splitting up the workload for smaller tasks (such as the index page or different css components), to make sure everyone understands what the code does.</p>

<h3>What the app does:</h3>
<ul>
  <li>takes input from users about their travel and eating habits, and lifestyle</li>
  <li>calculates their CO2 footprint, based on their answers</li>
  <li>uses an API to display the result in a pie chart</li>
</ul>

<h3>What I would change, add, or do differently:</h3>
<ul>
  <li>switch to next view after pressing SUBMIT</li>
  <li>prevent form resets on "Travel" and "Food" forms</li>
  <li>remove background image</li>
  <li>store results in database for future reference</li>
  <li>add option to send results via email</li>
</ul>

<h2>Instructions to run the app</h2>
<ul>In your Terminal:
  <li>type "npm install" to install dependencies</li>
  <li>type "npm start" and let it run in the background</li>
  <li>open a new tab and type "npm run build", let it run in the background</li>
  <li>in a new tab, type "npm run server:dev" and let it run in the background</li>
</ul>
In your web browser, go to <a href="http://localhost:3000/">http://localhost:3000/</a>.
