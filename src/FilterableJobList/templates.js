const Job = ({ id, posted_date, organization, location, applicants, score, contract_type, job_title, image }) => (
  <li className="media no-margin-top">
    <div className="media-left">
      <img className="media-object img-rounded" src={"img/"+image} />
    </div>
    <div className="media-body">
      <div className="media-line-1">{job_title + ' - ' + (contract_type==='FT'?'Full-time':'Part-time')}</div>
      <div className="media-line-2">{organization + ' in ' + location}</div>
      <div className="media-line-3">
       <span className={score>=90?'high-match':'norm-match'}>{score+'% Match'}</span>
       <span>{applicants>5?'5+ Applicants':(applicants===1?'1 Applicant':(applicants+' Applicants'))}</span>
       <span>{moment(posted_date).fromNow()}</span>
      </div>
    </div>
    <hr className='h-margin-12px'/>
  </li>
)

export const JobListTemplate = ({ jobs }) => (
  <ul className="media-list">
    {jobs.map(job => 
      <Job
        key={job.id}
        {...job}
      />
    )}
  </ul>
)

export const FilterBarTemplate = () => (
  <div className="panel panel-default">
    <div className="panel-heading">Filters</div>
    <div className="panel-body">
      <form>
        <div className="form-group">
          <label>Search</label>
          <input type="text" className="form-control" />
        </div>
        <label>Contract type</label>
        <div className="checkbox">
          <label><input type="checkbox" />Part-time</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox" />Full-time</label>
        </div>
      </form>
    </div>
  </div>
)