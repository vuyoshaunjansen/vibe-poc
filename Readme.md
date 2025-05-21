linkups for travelers Hey, I'm Vuyo, and this is the Vibe PoC! Ever felt like there's awesome stuff happening around you, or cool people to meet, but you just don't know where to start? That's exactly why I started dreaming up Vibe!

My big idea is to create an app that helps us all break out of the usual routine, find amazing real-world things to do (whether it's a last-minute surf session or a planned city tour), and genuinely connect with people who share our, well, vibe. Think less screen time, more real-life good times!

This GitHub repo is where I've been building the first interactive Proof of Concept (PoC) for Vibe. It's a sneak peek into what Vibe could be! what is vibe app? it is a proof of concept of an app where travelers and locals can meetup for various events, it is a great way to broaden your friend group as well ass keeping your weekends away from bordedom the app's functionality is users get recomended of various activies in the location they are in or in the location they will be best for solo travelers who want to get to know locals as well as locals that want to meet other locals it is not a dating app, but it is good to get to know people ✨ PoC Highlights & Demonstrated Features

This interactive demo showcases several foundational aspects of the Vibe experience:

Dynamic "For You" Feed: A curated, scrollable feed of upcoming mock events, intelligently prioritizing activities hosted by "friends" within the simulation, followed by community and other events. All events are sorted to feature upcoming dates.
Engaging Event Post Design:
Each post features an event image (portrait aspect ratio for a mobile-first feel), a clear title, formatted date & time, and host information.
Host profiles (avatar/name) are interactive, leading to a dedicated mock profile detail page.
An expandable "View Details" section provides comprehensive event information.
Simulated Interactions:
"Interested" button with a visual toggle state.
"Join Event" functionality that transitions the button to a "Chat" option upon a mock join, simulating user commitment and access to group communication.
A mock comment section allowing users to view pre-defined comments and add new (temporary) ones, with clickable commenter names leading to their mock profiles.
Rich Mock Data Environment: The PoC utilizes data for 9 distinct user profiles (a mix of "friends" and other users) and 15 diverse events. These include profile-hosted activities and general community events, all with unique images, descriptions, and mock upcoming dates/times, distributed across simulated versions of Cape Town, Barcelona, and Rio de Janeiro.
Core Navigational Flow & Page Views (Mocked):
Feed Page: The primary interface for event discovery.
Explore Page (Concept): Demonstrates an alternative event discovery view, displaying all upcoming events sorted by date.
Profile Detail Page: Allows viewing of mock user profiles, including their hosted events and a placeholder "Connect" button for non-friend profiles.
My Profile Page: A basic representation of the PoC user's simulated interactions (e.g., interested/joined events).
Create Event Page: A placeholder interface for future event creation functionality.
All Chats Page: Lists joined event chats (clickable) and includes static mock "past chats" with friends for illustrative purposes.
Single Chat Page: A basic interface for group chat within a joined event, featuring mock messages.
Calendar Page: A placeholder indicating future calendar integration.
Consistent "Back" Navigation: Logic implemented for intuitive navigation between views.
Customizable User Experience:
Light/Dark Mode Toggle: Allows users to switch between visual themes, with the preference saved in localStorage for persistence.
Mobile/Desktop View Toggle: Demonstrates a responsive layout shift for the main feed (from a mobile-optimized single-column to a desktop-friendly multi-column grid), with the preference also saved in localStorage.
Responsive Design Elements: Foundational CSS for adapting to various screen sizes.
Project Attribution: A footer crediting "Designed by Vuyo Jansen" and stating the app's core mission.
🚀 How to Run This Proof of Concept
Obtain the Code:
Clone this repository using Git: git clone <repository-url>
Alternatively, download the project as a ZIP file and extract it.
Verify File Structure: Ensure all project files and folders (index.html, css/style.css, js/script.js, and the complete assets/images/ directory with its subfolders and 25 images) are correctly placed as outlined in previous setup instructions.
Launch in a Web Browser:
Recommended Method: If using VS Code, install the "Live Server" extension. Right-click on index.html in the VS Code Explorer and select "Open with Live Server."
Direct Method: Open the index.html file directly from your file system in a modern web browser.
Explore: Interact with the feed, event posts, mock user profiles, theme switcher, and view toggle. The browser's Developer Console (F12) can provide insights into any unexpected behavior.
🛠️ Technologies Utilized
HTML5: For structuring the application's content and views.
CSS3: For styling, layout (Flexbox, Grid), responsiveness, and implementing the light/dark theming system with CSS Variables.
Vanilla JavaScript (ES6+): For all client-side logic, including DOM manipulation, event handling, mock data management, state simulation, and interactive features.
Font Awesome: For scalable vector icons (loaded via CDN).
Browser localStorage: For persisting user preferences for theme and view mode.
🔮 The Vision for Vibe: Future Development
This Proof of Concept serves as a tangible glimpse into Vibe's potential. The long-term vision is to develop a comprehensive and dynamic platform with features including:

Real-time Interactive "Vibe Map": For intuitive, location-based discovery of ongoing and upcoming activities.
Secure User Authentication & Rich Profiles: Enabling users to create detailed profiles, manage preferences, and build their Vibe network.
Robust Backend Infrastructure & Database: To support live Vibe creation, real-time chat functionalities, and persistent storage of all user and event data.
Advanced Social Networking Features: Including a comprehensive friending system, direct messaging capabilities, and tools for group/community management.
Intelligent Notification System: Personalized alerts for relevant new Vibes, messages, and friend activity.
Integrated Payment Solutions: For secure handling of ticketed events and facilitating easy cost-sharing among Vibe participants.
Partnerships & Expanded Content: Collaboration with local businesses, event organizers, and festivals to broaden the range of available Vibes.
Comprehensive Safety, Security & Moderation Protocols: Ensuring a safe and trustworthy environment for all users.
Integrated Calendar Functionality.
Full-Scale Road Trip Planning Tools.
Internationalization & Localization for Global Reach.
Our overarching goal is to establish Vibe as the premier platform for discovering, creating, and participating in authentic, shared real-world experiences that enrich lives and foster meaningful connections.

🌱 Support Vibe's Journey 
Vibe is driven by a passion for connecting people and fostering vibrant communities. This functional PoC demonstrates the core experience we aim to deliver. To evolve Vibe into the full-featured, global platform envisioned—complete with a scalable backend, the innovative Vibe Map, secure systems, and a thriving user base—we are seeking support.

Your contribution can help turn this vision into a reality, building a tool that genuinely enhances how people connect and experience the world around them.

This Proof of Concept code is primarily for demonstration and portfolio use. Copyright © 2025 Vuyo Jansen. All Rights Reserved. (You may consider an open-source license like MIT if you intend for the PoC code to be used or adapted by others.)
