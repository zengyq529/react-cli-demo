

const Select = ({ value, options, onChange }) => {
    return (
        <select onChange={e => onChange(e.target.value)}
            value={value}>
            {options.map(option =>
                <option value={option} key={option}>
                    {option}
                </option>)
            }
        </select>
    )
}

export default Select