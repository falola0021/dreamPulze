$(function () {
  $('#SearchString').autocomplete({
    source: category,
    minLength: 1
  })
})

$(function () {
  $('#clearbutton').click(function () {
    $('#SearchString').autocomplete('close')
    $('#SearchString').val('')
  })
})
let category = []

// Fetch data from data.json file
fetch('jobData.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    initialData = data[0]
    let jobWrapper = ''
    let detailsWrapper = ''

    data.forEach((data) => {
      category.push(data.category)

      jobWrapper += `<div>
      <div class="card">
                      <div class="row ">
                    <div class="col col-1  ">
                   <img  class="company-logo" src="${data.image}" alt="brabd-logo"/>
                   </div>
                   <div class="col col-11 details-boxx">
                    <div class="job-title">${data.title}</div>
                    <div class="job-details-container">
                        <div>
                            <span class="label">Employment Type: </span>
                            <span class="label-text">${data.employmentType}</span>
                        </div>
                        <div>
                            <div class="percent-ready">${data.readiness}%</div>
                             <div class="ready-text">${data.isReady}</div>
                        </div>
                    </div>
                        <div class="other-info-container">
                            <div>
                            <span class="label">Last Date</span>
                            <span class="label-text">${data.lastDate}</span>
                            </div>
                              <div>
                            <span class="label">Posted By:</span>
                            <span class="label-text">${data.posteBy}</span>
                            </div>
                            
                        </div>
                        <div class="time-applicant">
                          
                            <span class="time">${data.postedTime}</span>
                            <span>${data.applicants} Applicants</span>
                        
                        </div>
                    </div>
                  
                    
                    </div>

                  </div>
                  </div>`
    })
    detailsWrapper += `<div>
     <div class="row ">
                    <div class="col col-1">
                      <img
                        class="company-logo-large"
                        src="${initialData.image}"
                        alt="brabd-logo"
                      />
                    </div>
                    <div class="col-11 col-boxx ">
                      <div class="job-title-large">
                       ${initialData.title}
                      </div>
                      <div class="large-job-details-container">
                        <div>
                          <span class="label-large"
                            >${initialData.location}</span
                          >
                          <!-- <span class="label-text">${initialData.employmentType}</span> -->
                        </div>
                        <div>
                          <div class="percent-ready-large">${initialData.readiness}%</div>
                          <div class="ready-text-large">Ready</div>
                        </div>
                      </div>
                      <div class="large-other-info-container">
                        <div>
                          <span class="new">${initialData.status}</span>
                          <span class="time-large">
                            <span>Posted ${initialData.postedTime}</span>
                            <span >${initialData.views} <i class="fa fa-eye"></i></span>
                          </span>
                        </div>
                        <div class="large-desired-experience">
                          <span>Desired Experience Level: ${initialData.experienceLevel}</span>
                          <span>Desired Readiness Score: ${initialData.desiredReadiness}%</span>
                          <span>Apply By: ${initialData.lastDate}</span>
                        </div>
                      </div>
                      <div class="time-applicant-large">
                        <span class="large-applicant">${initialData.applicants} Applicant</span>
                     <i class="fas fa-dot-circle dot"></i>
                        <span class="large-applicant">${initialData.employmentType}</span>
                      </div>
                      <div class="action-button">
                        <button class="action-apply">Apply</button>
                        <button class="action-save">Save</button>
                        <button class="action-generate">
                          Generate Customer Resume
                        </button>
                      </div>
                    </div>
                    
                    <div class="large-other-details">
                      <hr class="horizontal-line"/>
                      <div class="title-job">Role Responsibilities</div>
                      <div class="description">
                        ${initialData.roleResponsibilities}
                      </div>
                      <div class="title-job">Technical skill Requirement</div>
                      <div class="description">
                       ${initialData.techinicalRequirement}
                      </div>

                     
                      <div class="title-job">Soft skill Requirement</div>
                      <div class="description">
                       ${initialData.softSkillRequirement}
                        
                      </div>
                      <div class="title-job">Work History</div>
                      <div class="description">
                      ${initialData.workHistory}
                      
                      </div>
                      <div class="title-job">Desired Educational Background</div>
                      <div class="description">
                       ${initialData.educationalBackground}
                       
                      </div>
                       <div class="title-job">Desired certifications and Accreditations</div>
                      <div class="description">
                        ${initialData.certification}
                       
                      </div>
                       <div class="title-job">Other Requirements</div>
                      <div class="description">
                         ${initialData.otherRequirements}
                       
                      </div>
                    </div>
                  </div>
                  </div>`

    document.querySelector('.card-div').innerHTML = jobWrapper
    document.querySelector('.large-card-container').innerHTML = detailsWrapper
  })
  .catch(function (err) {
    console.log('error: ' + err)
  })
