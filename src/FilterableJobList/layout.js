import { FilterBar, VisibleJobList } from './containers.js'

const FilterableJobListLayout = () => (
  <div className="row">
    <div className="col-md-4">
      <FilterBar />
    </div>
    <div className="col-md-8">
      <VisibleJobList />
    </div>
  </div>
)

export default FilterableJobListLayout
