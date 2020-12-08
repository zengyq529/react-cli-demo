import List from './children/list'
import Select from './children/select'

const D1 = ({ selectValue = 'reactjs', posts = [] }) => {
    return (
        <div>
            <Select value={selectValue} options={['reactjs', 'frontend']}></Select>
            <List posts={posts}></List>
        </div>
    )
}
export default D1