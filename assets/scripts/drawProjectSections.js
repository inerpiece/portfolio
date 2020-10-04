function drawProjectSections(){
    let dataProjects = data.projects;
    for (let j = 0; j < dataProjects.length; j++) {
        const project = dataProjects[j];
        setTimeout(function(){
            document.querySelector('#main_section').innerHTML += `
            <article class="fifty50 relative project_text_pos">
                <h2>${project.metaData.projName} <span class="relative">${project.metaData.projNameTwo}</span></h2>
                <h4><span>${project.metaData.projBrief}</span> ${project.metaData.projBriefContent}</h4>
                <h4><span>${project.metaData.projRole}</span> ${project.metaData.projRoleContent}</h4>
                <h4><span>${project.metaData.projProcesses}</span> ${project.metaData.projProcessesContent}</h4>
                <h4><span>${project.metaData.projProduct}</span> ${project.metaData.projProductContent}</h4>
                <a href="project.html?pageID=${project.page_id}"><i class="fas fa-arrow-circle-right fa-5x"></i></a>
            </article>
            `;
        }, j * 0); /*setTimeout helps the 1 thread processor on the browsers handle different functions at seemingly the same time even if set at 0*/
    }
};

drawProjectSections();