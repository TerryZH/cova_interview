import { FilterBar, VisibleJobList } from './containers.js'

const FilterableJobList = () => (
  <div className="row">
    <div className="col-md-4">
      <FilterBar />
    </div>
    <div className="col-md-8">
      <VisibleJobList />
    </div>
  </div>
)

export default FilterableJobList
