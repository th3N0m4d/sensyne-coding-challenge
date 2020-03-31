import AcUnit from '@material-ui/icons/AcUnit'
import UUID from 'uuid/v4'

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
  species: 'Human',
  name: 'Jon Snow',
  Icon: AcUnit,
  description: 'You know nothing, Jon Snow.'
}

const createRowData = ({ name, species, Icon, description }) => {
  const rowData = { ...defaultMock }
  rowData.id = UUID()
  rowData.name = name || rowData.name
  rowData.species = species || rowData.species
  rowData.Icon = Icon || rowData.Icon
  rowData.description = description || rowData.description
  return rowData
}

export { createRowData }
