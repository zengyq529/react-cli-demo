import React from 'react'
import { connect } from 'react-redux'


import List from './children/list'
import Select from './children/select'
import { selectChange } from './model/action'

const D1 = ({ selectValue = 'reactjs', list = [], dispatch }) => {
    return (
        <div>
            <Select value={selectValue} options={['reactjs', 'frontend']} onChange={(value) => { dispatch(selectChange(value)) }}></Select>
            <List posts={list}></List>
        </div>
    )
}

export default connect(({ list, selectValue }) => { return { list, selectValue } })(D1)