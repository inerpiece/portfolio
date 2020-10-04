/*For readability: Template includes:

Project
    page_id
    metaData
        Name
        NameTwo
        Brief
        BriefContent
        Role
        RoleContent
        Processes
        ProcessesContent
        Product
        ProductContent
        mainImage
    keyFeatures
        featureOne
        featureTwo
        featureThree
    contextData
        setOne
        setTwo
        setThree

*/

const data = {
    "projects": [
        {
            "page_id": 100,
            "metaData": 
            {
                "projName": "Blokhus",
                "projNameTwo": "Sports & Events",
                "projBrief": "Brief:",
                "projBriefContent": "Meeting with client, general business idea, free design ideation",
                "projRole": "Role:",
                "projRoleContent": "Front-end Developer &frasl; UI and UX Designer",
                "projProcesses": "Processes:",
                "projProcessesContent": "JavaScript, Atomic Design, SEO, IA, GitHub, Headless CMS, Wordpress API",
                "projProduct": "Product:",
                "projProductContent": "Web based high-fidelity, functional and responsive prototype",
                "mainImage": "assets/images/blokhusHeroImage.jpg"
            },
            "keyFeatures":
            {
                "featureOne": "User Centered",
                "featureTwo": "Headless CMS",
                "featureThree": "GitHub",
            },
            "contextData": 
                {
                    "setOne": {
                        "title": "User Centered",
                        "description": "In the project of Blokhus Sports & Events, the team decided to go with User Centered Design and involve the users as much as possible in the development process. The team has performed numerous User Tests such as Think Aloud, 5-second tests, Card Sorting and Hybrid tests. This helped the team decide on information architecture, design choices, display of content and more. Working in an iterative and agile manner proved to be the right choice for this project as it allowed us to work in a more planned and consise manner.",
                        "imageOne": "assets/images/blokhusFeatureOneMain.jpg",
                        "imageTwo": "assets/images/blokhusFeatureOne2.jpg",
                        "imageThree": "assets/images/blokhusFeatureOne3.jpg"
                    },
                    "setTwo": {
                        "title": "HeadlessCMS",
                        "description": "Since the client needed to add events on a regular basis such as upcoming or past ones, the team decided to once again work with Headless CMS utilizing the Wordpress API for the storage of event information. The team built 2 templates for upcoming and past events within the hosting environment with instructions for the client so that new content can easily be added or removed. The client heavily benefits from this feature as it allows him to manage the content himself instead of having to hire an administrator to do that for him (just an example).",
                        "imageOne": "assets/images/blokhusFeatureTwoMain.jpg",
                        "imageTwo": "assets/images/blokhusFeatureTwo2.jpg",
                        "imageThree": "assets/images/blokhusFeatureTwo3.jpg"
                    },
                    "setThree": {
                        "title": "GitHub",
                        "description": "During a time of pandemic, the team had to collaborate through online means. For the development of the project and more particularly the coding aspect, the team chose GitHub as a tool for assisting us in managing and combining the code we were writing. This experience was valuable for us as we got used to it and will definately use it in future projects. <br><br>At this time the project is private, however, from the screenshots you can gain an understanding of how much we utilized the tool.<br><br> Visit product: <a href='http://des-iis.ucn.dk/mmdi0919/1081577/sem2/MMDI2/group202/index.html' target='_blank'>Click here</a>",
                        "imageOne": "assets/images/blokhusFeatureThreeMain.jpg",
                        "imageTwo": "assets/images/blokhusFeatureThree2.jpg",
                        "imageThree": "assets/images/blokhusFeatureThree3.jpg"
                    }
                }
            
        },
        {
            "page_id": 101,
            "metaData": 
            {
                "projName": "Ungdomsringens",
                "projNameTwo": "Musikfestival",
                "projBrief": "Brief:",
                "projBriefContent": "Meeting with client, logo, materials and overall free reign over design",
                "projRole": "Role:",
                "projRoleContent": "Front-end Developer &frasl; UI Designer",
                "projProcesses": "Processes:",
                "projProcessesContent": "Atomic Design, SEO, IA, SCRUM, GitHub, Headless CMS, Wordpress API",
                "projProduct": "Product:",
                "projProductContent": "Web based high-fidelity, functional and responsive prototype",
                "mainImage": "assets/images/home_hero.jpg"
            },
            "keyFeatures":
            {
                "featureOne": "Responsive",
                "featureTwo": "Atomic Design",
                "featureThree": "Headless CMS",
            },
            "contextData": 
                {
                    "setOne": {
                        "title": "Responsive Web Design",
                        "description": "In today's generation, it is needless to say that having a responsive webpage increases your business' profitability and professional look by a ton. I strive to have this feature on all of the projects I work upon as it gives me plenty of experience working with different media queries. In the case of Ungomsringen it wasn’t something that the team had decided to accomplish but rather it was a functional requirement predetermined by the client. The challenges we faced were connected to the navigation and how we wanted to display it on different views. However, the team came up to an agreement to have a standard view when it comes to desktops and a standard view when it comes to mobile devices (having a burger icon for the menu). The value we extracted from that was working with JavaScript to make sure that all transitions are smooth and nothing is broken in terms of visibility and the items in the menu.",
                        "imageOne": "assets/images/musicfestival_front_page.jpg",
                        "imageTwo": "assets/images/musicfestival_front_page_tablet.jpg",
                        "imageThree": "assets/images/musicfestival_front_page_mobile.jpg"
                    },
                    "setTwo": {
                        "title": "Atomic Design",
                        "description": "For this project the team decided to go with Atomic Design for the construction of the elements within each page. The most obvious molecule is the card on the images. It consists of several atoms and when put together it makes for a great display of information as well as call to action. But enough terminologies, the main reason for this decision was to try it out and see how it differs from different approaches. Although, the team liked working with this method, it took a lot of time designing each of the small elements (atoms) and figuring out how they work together. That was the main challenge. However, after we did all of the hard lifting, it was great for reusability and saved us a lot of time in the coding section.",
                        "imageOne": "assets/images/atomicDesign_One.jpg",
                        "imageTwo": "assets/images/atomicDesign_Two.jpg",
                        "imageThree": "assets/images/atomicDesign_Three.jpg"
                    },
                    "setThree": {
                        "title": "Headless CMS",
                        "description": "One of the requirements for the project was to use a Headless Content Management System. The team decided to go with Wordpress as it was easy enough to get right into and create content quickly. Of course, there were some challenges of which, the most prominent one was figuring out how to structure the data within the system so that it would be easy to reuse for the client after they got the product. We separated the content in different categories which had different sorts of information such as band, stages, time and date information etc. Similarly to the Atomic Design. After we had built the structure it was easy to add new content on demand and that is what we were going with.",
                        "imageOne": "assets/images/headlessCMS_One.jpg",
                        "imageTwo": "assets/images/headlessCMS_Two.jpg",
                        "imageThree": "assets/images/headlessCMS_Three.jpg"
                    }
                }
            
        },
        {
            "page_id": 102,
            "metaData": 
            {
                "projName": "Svalegaarden",
                "projNameTwo": "Mest",
                "projBrief": "Brief:",
                "projBriefContent": "Design requirements, logo, their story, goals and needs",
                "projRole": "Role:",
                "projRoleContent": "Front-end Developer &frasl; UI Designer &frasl; Researcher",
                "projProcesses": "Processes:",
                "projProcessesContent": "Affinity diagrams, SSR, IA, SEO, Tests, Benchmarking",
                "projProduct": "Product:",
                "projProductContent": "Fully functional and responsive web based prototype",
                "mainImage": "assets/images/project_two_image.jpg"
            },
            "keyFeatures":
            {
                "featureOne": "Responsive",
                "featureTwo": "Diagrams",
                "featureThree": "Benchmarking",
            },
            "contextData": 
                {
                    "setOne": {
                        "title": "Responsive Web Design",
                        "description": "In today's generation, it is needless to say that having a responsive webpage increases your business' profitability and professional look by a ton. I strive to have this feature on all of the projects I work upon as it gives me plenty of experience working with different media queries. For Svalegaarden Mest, it was not only a requirement but a chance for us to try and improve their existing responsive layout. The first thing we changed was the navigation and the way it functioned. After a team discussion, we went with the classic approach of having key words as navigational items for the menu on desktop versions. As for mobile devices, we went with a burger icon solution. A note to take here is that we decided to leave the classic view for Tablet devices as well. We thought that it gave it a unique view and blended well with the style we were going with.",
                        "imageOne": "assets/images/mestImage_One.jpg",
                        "imageTwo": "assets/images/mestImage_Two.jpg",
                        "imageThree": "assets/images/mestImage_Three.jpg"
                    },
                    "setTwo": {
                        "title": "Affinity Diagrams",
                        "description": "The team had to go through a couple of challenges for this project and the main one was the information architecture. We used the Affinity Diagrams to try and workout where certain elements should be displayed and how we should group them up. Of course, we had to go through several iterations after user tests, but in the end the team was happy with the information architecture and we went ahead and implemented it. Needless to say, this process takes time and one can never get it perfect as all users are not the same and may interpret information differently. However, we believed that we had it as close as possible for the target audience we had. <br /><br />Disclaimer&#58; The images on the right are only for example and do not represent the actual Affinity Diagram which we had for the project.",
                        "imageOne": "assets/images/mestAffinity_One.jpg",
                        "imageTwo": "assets/images/mestAffinity_Two.jpg",
                        "imageThree": "assets/images/mestAffinity_Three.jpg"
                    },
                    "setThree": {
                        "title": "Benchamrking Competitors",
                        "description": "The Team had already learned about different approaches for researching on design; however, for this particular project we decided to do a competitor benchmark. What we were trying to get out of it was which elements work and which elements do not work. We were basing this off of user tests after gaining enough information. We had reviewed several competitors of which, three in depth and took certain design patterns from them. Again, this was not a simple task to achieve so a lot of time was spent on research and user tests to make sure that the patterns we have chosen are appropriate for the project. The main challenge was the analysis of the research, but we took our time and managed to produce a valid framework and layout.",
                        "imageOne": "assets/images/mestBench_One.jpg",
                        "imageTwo": "assets/images/mestBench_Two.jpg",
                        "imageThree": "assets/images/mestBench_Three.jpg"
                    }
                }
            
        },
        {
            "page_id": 103,
            "metaData": 
            {
                "projName": "VR",
                "projNameTwo": "News",
                "projBrief": "Brief:",
                "projBriefContent": "Meeting with client, logo, materials and overall free reign over design",
                "projRole": "Role:",
                "projRoleContent": "Front-end Developer &frasl; UI Designer",
                "projProcesses": "Processes:",
                "projProcessesContent": "Atomic Design, SEO, IA, SCRUM, GitHub, Headless CMS, Wordpress API",
                "projProduct": "Product:",
                "projProductContent": "Web based high-fidelity, functional and responsive prototype",
                "mainImage": "assets/images/vr-back_reduced.jpg"
            },
            "keyFeatures":
            {
                "featureOne": "Responsive",
                "featureTwo": "Grid Layout",
                "featureThree": "Typography",
            },
            "contextData": 
                {
                    "setOne": {
                        "title": "Responsive Web Design",
                        "description": "In today's generation, it is needless to say that having a responsive webpage increases your business' profitability and professional look by a ton. I strive to have this feature on all of the projects I work upon as it gives me plenty of experience working with different media queries. Since this was an individual project to take care of, we were required to have at least two different media queries. In my case, I built three, even if two of them are similar, small typography changes were needed so that each view had the perfect balance of font size and line height.",
                        "imageOne": "assets/images/vrResponsive_One.jpg",
                        "imageTwo": "assets/images/vrResponsive_Two.jpg",
                        "imageThree": "assets/images/vrResponsive_Three.jpg"
                    },
                    "setTwo": {
                        "title": "Grid Layout",
                        "description": "One of the requirements for this project was to utilize a grid for the layout of the webpage. I had a few choices ahead of me such as flexbox and custom grids; however, I decided to go with grid because it gave me enough freedom to experiment. It also is easy to implement in a 12-column-grid layout. Furthermore, I needed the practice so I went for it.",
                        "imageOne": "assets/images/vrGrid_One.jpg",
                        "imageTwo": "assets/images/vrGrid_Two.jpg",
                        "imageThree": "assets/images/vrGrid_Three.jpg"
                    },
                    "setThree": {
                        "title": "Typography Rules",
                        "description": "When it comes to typography, there is a lot to say and learn. For this project I focused on basic typography principals such as line length, line height, font size etc. Just making sure I have consistency across different media queries and making sure that I am in the golden zone of each of the principals. An obvious design choice can be seen in the first picture where the paragraph was split into two columns to prevent the line length exceeding a certain amount of characters. Something that could have been expanded upon in the project are font families. There is a lot I am not touching upon in this brief explanation as I mentioned earlier, typography is a vast subject.",
                        "imageOne": "assets/images/vrTypo_One.jpg",
                        "imageTwo": "assets/images/vrTypo_Two.jpg",
                        "imageThree": "assets/images/vrTypo_Three.jpg"
                    }
                }
            
        },
        {
            "page_id": 104,
            "metaData": 
            {
                "projName": "Under",
                "projNameTwo": "Construction",
                "projBrief": "Brief:",
                "projBriefContent": "N&frasl;A",
                "projRole": "Role:",
                "projRoleContent": "N&frasl;A",
                "projProcesses": "Processes:",
                "projProcessesContent": "N&frasl;A",
                "projProduct": "Product:",
                "projProductContent": "N&frasl;A",
                "mainImage": ""
            },
            "keyFeatures":
            {
                "featureOne": "N&frasl;A",
                "featureTwo": "N&frasl;A",
                "featureThree": "N&frasl;A",
            },
            "contextData": 
                {
                    "setOne": {
                        "title": "N&frasl;A",
                        "description": "Lorem ipsum",
                        "imageOne": "",
                        "imageTwo": "",
                        "imageThree": ""
                    },
                    "setTwo": {
                        "title": "N&frasl;A",
                        "description": "Lorem ipsum",
                        "imageOne": "",
                        "imageTwo": "",
                        "imageThree": ""
                    },
                    "setThree": {
                        "title": "N&frasl;A",
                        "description": "Lorem ipsum",
                        "imageOne": "",
                        "imageTwo": "",
                        "imageThree": ""
                    }
                }
            
        }
    ]
}

/*Notes:

Line 220: A square braket is missing. At first contextData was an array, however, it appeared that I could not get access to setOne through Three if it was an
array so I removed the square brakets (so that it is no longer an array) and it worked out.
Line 172: Same
Line 124: Same

The idea behind projBrief and projContent (and this set of data as a whole) was to have the option to customize the text (have different colors and styles)

One drawback to the design... I need 3 images supporting each keyFeature at all times :/

*/