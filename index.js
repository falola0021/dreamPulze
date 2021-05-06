// Fetch data from data.json file
fetch('sidebarData.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let itemsWrapper = ''

    data.forEach((data) => {

      itemsWrapper += `<div class="mb-4">
     <span class="${data.icon}"></span>
          <span class="item-text">${data.name}</span>
      </div>`
    })
    document.querySelector('.items-wrapper').innerHTML = itemsWrapper
  })
  .catch(function (err) {
    console.log('error: ' + err)
  })

// Fetch data from data.json file
fetch('jobData.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let jobWrapper = ''

    data.forEach((data) => {

      jobWrapper += `<div>
      <div class="card">
                      <div class="row ">
                    <div class="col col-1 ">
                   <img  class="company-logo" src="${data.image}" alt="brabd-logo"/>
                   </div>
                   <div class="col col-11">
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
                            <span>${data.applicants}</span>
                        
                        </div>
                    </div>
                  
                    
                    </div>

                  </div>
                  </div>`
    })
    document.querySelector('.card-div').innerHTML = jobWrapper
  })
  .catch(function (err) {
    console.log('error: ' + err)
  })
