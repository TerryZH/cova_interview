import { FilterBarTemplate, JobListTemplate } from './templates.js'

const mapStateToVisibleJobs = (state, ownProps) => {
  return { jobs: JOBS}
}

export const FilterBar = ReactRedux.connect()(FilterBarTemplate)
export const VisibleJobList = ReactRedux.connect(mapStateToVisibleJobs)(JobListTemplate)