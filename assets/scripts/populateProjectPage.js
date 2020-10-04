function populateProjectPage(){
    let storyProjectContents = data.projects;

        let parameters = window.location.href.split('?')[1];
        let postID = parameters.split('=')[1];

        const selectedProject = storyProjectContents.find(project => project.page_id == postID);
        
        
        document.querySelector('#main_singleProj').innerHTML = `
        <section class="flex singleProj_section">
            <article class="fifty50 relative project_text_pos">
                <h2>${selectedProject.metaData.projName} <span class="relative">${selectedProject.metaData.projNameTwo}</span></h2>
                <h4><span>${selectedProject.metaData.projBrief}</span> ${selectedProject.metaData.projBriefContent}</h4>
                <h4><span>${selectedProject.metaData.projRole}</span> ${selectedProject.metaData.projRoleContent}</h4>
                <h4><span>${selectedProject.metaData.projProcesses}</span> ${selectedProject.metaData.projProcessesContent}</h4>
                <h4><span>${selectedProject.metaData.projProduct}</span> ${selectedProject.metaData.projProductContent}</h4>
                <a href="projects.html"><i class="fas fa-arrow-circle-left fa-5x"></i></a>
            </article>
            <article class="fifty50 relative project_img_pos mobile_perish">
                <img class="xlarge_ circle image image_non_inverse" src="${selectedProject.metaData.mainImage}" alt="picture of a project">
            </article>
        </section>
        <div class="line-right"></div>
        <section class="keyFeatures">
            <h2>Key Features</h2>
            <article class="fifty50 flex">
                <div class="large_ circle image_non_inverse">
                    <h3 class="textAlignCenter">${selectedProject.keyFeatures.featureOne}</h3>
                </div>
                <div class="large_ circle image_non_inverse">
                    <h3 class="textAlignCenter">${selectedProject.keyFeatures.featureTwo}</h3>
                </div>
                <div class="large_ circle image_non_inverse">
                    <h3 class="textAlignCenter">${selectedProject.keyFeatures.featureThree}</h3>
                </div>
            </article>
        </section>
        <div class="line-left"></div>
        <section>
            <section class="feature_sections">
                <h2>${selectedProject.contextData.setOne.title}</h2>
                <section class="flex singleProj_section_one">
                    <article class="article_left">
                        <p>${selectedProject.contextData.setOne.description}</p>
                    </article>
                    <article class="article_right">
                        <img src="${selectedProject.contextData.setOne.imageOne}" alt="an image of a website for desktop">
                        <img src="${selectedProject.contextData.setOne.imageTwo}" alt="an image of a website for tablet">
                        <img src="${selectedProject.contextData.setOne.imageThree}" alt="an image of a website for mobile">
                    </article>
                </section>
            </section>
        </section>
        <div class="line-center"></div>
        <section>
            <section class="feature_sections">
                <h2>${selectedProject.contextData.setTwo.title}</h2>
                <section class="flex singleProj_section_one">
                    <article class="article_left">
                        <p>${selectedProject.contextData.setTwo.description}</p>
                    </article>
                    <article class="article_right">
                        <img src="${selectedProject.contextData.setTwo.imageOne}" alt="an image of a website for desktop">
                        <img src="${selectedProject.contextData.setTwo.imageTwo}" alt="an image of a website for tablet">
                        <img src="${selectedProject.contextData.setTwo.imageThree}" alt="an image of a website for mobile">
                    </article>
                </section>
            </section>
        </section>
        <div class="line-center"></div>
        <section>
            <section class="feature_sections">
                <h2>${selectedProject.contextData.setThree.title}</h2>
                <section class="flex singleProj_section_one">
                    <article class="article_left">
                        <p>${selectedProject.contextData.setThree.description}</p>
                    </article>
                    <article class="article_right">
                        <img src="${selectedProject.contextData.setThree.imageOne}" alt="an image of a website for desktop">
                        <img src="${selectedProject.contextData.setThree.imageTwo}" alt="an image of a website for tablet">
                        <img src="${selectedProject.contextData.setThree.imageThree}" alt="an image of a website for mobile">
                    </article>
                </section>
            </section>
        </section>
        `;
};

populateProjectPage();